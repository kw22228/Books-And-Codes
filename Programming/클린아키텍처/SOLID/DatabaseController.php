<?php

namespace Core\Database;

use Core\Config\Config;
use Core\Database\Queries\{SelectQuery, InsertQuery, UpdateQuery, DeleteQuery};
use Core\ResponseResult;
use Core\Utils\{Util, Constant};
use Exception;
use RuntimeException;

class DatabaseController
{
    /* Static */
    const DATABASE_TYPE = [
        'IDC' => 'idc',
        'CLOUD' => 'cloud',
        'DOCKER' => 'docker'
    ];
    private static array $instances = [];
    public static function getInstance(string $dbName, string $dbType): self
    {
        if (empty($dbName)) throw new Exception('Database name is required.', Constant::NOT_EXIST_PARAMETER);
        if (empty($dbType)) throw new Exception('Database type is required.', Constant::NOT_EXIST_PARAMETER);

        if (empty(self::$instances[$dbName][$dbType])) {
            self::$instances[$dbName][$dbType] = new self($dbName, $dbType);
        }

        return self::$instances[$dbName][$dbType];
    }
    /* Static */


    /* Instance start */

    private PdoFactory $pdoFactory;
    private ResponseResult $responseResult;

    /** @var array{master: Database, slave: Database|false} */
    private array $databases = [];
    /** @var array{master: QueryExecutor, slave: QueryExecutor|false} */
    private array $executors = [];

    /** @var array{name: string, type: 'idc'|'cloud'|'docker'} */
    private array $databaseInfo = [];

    protected function __construct(string $dbName, string $dbType)
    {
        if (!in_array($dbType, array_values(self::DATABASE_TYPE))) {
            throw new Exception('Invalid database type.');
        }

        $this->databaseInfo = ['name' => $dbName, 'type' => $dbType];
        $this->pdoFactory = new PdoFactory();
        $this->responseResult = new ResponseResult(ResponseResult::ERROR, 'is not used');
    }

    public function getResponseResult(): ResponseResult
    {
        return $this->responseResult;
    }

    /**
     * 환경변수 디렉토리에서 Database 정보 가져옴.
     * @return bool|array{
     *  MASTER_DB_HOST: ?string,
     *  SLAVE_DB_HOST: ?string,
     *  DB_PORT: ?string,
     *  DB_USER: ?string,
     *  DB_PASSWORD: ?string,
     *  DB_NAME: ?string,
     *  DB_CHARSET: ?string
     * }
     */
    private function getConfig(): array|bool
    {
        ['name' => $dbName, 'type' => $dbType] = $this->databaseInfo;

        try {
            return Util::parseIniString($dbType, "databases/{$dbName}");
        } catch (Exception $error) {
            echo get_class($this) . '->' . __FUNCTION__ . " ERROR::: {$error->getMessage()}";
            echo "<br/>";
            echo Config::get('ENVIRONMENTS_DATABASES_PATH') . "/{$dbName}/{$dbType}.ini";
            return false;
        }
    }

    /**
     * Database 생성성
     * @param 'master'|'slave' $connection
     * @return bool|Database
     */
    private function createDatabase(string $connection): bool|Database
    {
        $config = $this->getConfig();
        ['MASTER_DB_HOST' => $MASTER_DB_HOST, 'SLAVE_DB_HOST' => $SLAVE_DB_HOST] = $config;

        unset($config['MASTER_DB_HOST'], $config['SLAVE_DB_HOST']);

        if ($connection === 'slave' && empty($SLAVE_DB_HOST)) return false;

        try {
            $database = new Database(
                $this->pdoFactory
                    ->setConfig([
                        'DB_HOST' => $connection === 'master' ? $MASTER_DB_HOST : $SLAVE_DB_HOST,
                        ...$config
                    ])
                    ->create()
            );

            $this->responseResult
                ->setCode(ResponseResult::SUCCESS)
                ->setMsg('Database connection success.');

            return $database;
        } catch (RuntimeException $e) {
            $this->responseResult
                ->setCode(ResponseResult::ERROR)
                ->setMsg($e->getMessage());

            return false;
        }
    }

    /**
     * Database 호출 (instance가 없을시 instance생성)
     * @param 'master'|'slave' $connection
     * @return bool|Database
     */
    private function database(string $connection): bool|Database
    {
        if (!isset($this->databases[$connection])) {
            $this->databases[$connection] = $this->createDatabase($connection);
        }

        return $this->databases[$connection];
    }

    /* Query Executor */

    /**
     * Query executor 생성
     * @param 'master'|'slave' $connection
     * @return bool|QueryExecutor
     */
    private function createExecutor(string $connection): bool|QueryExecutor
    {
        if ($connection === 'slave' && !$this->database('slave')) return false;

        $database = $this->database($connection);
        if (!$database) return false;

        return new QueryExecutor($database);
    }

    /**
     * Query executor 호출 (executor가 없을시 새로 생성)
     * @param 'master'|'slave' $connection
     * @return bool|QueryExecutor
     */
    private function executor(string $connection): bool|QueryExecutor
    {
        if (!isset($this->executors[$connection])) {
            $this->executors[$connection] = $this->createExecutor($connection);
        }

        return $this->executors[$connection];
    }

    public function query(SelectQuery $builder): ResponseResult
    {
        $executor = ($this->executor('slave') ?: $this->executor('master'));

        if (empty($executor)) {
            return $this->responseResult;
        }

        /* Sql query setting */
        $this->responseResult->setQuery(
            QueryBuilder::interpolate(
                $builder->getSql(),
                $builder->getBindings()
            )
        );

        try {
            $result = $executor->query($builder);

            $this->responseResult
                ->setCode(ResponseResult::SUCCESS)
                ->setMsg("Select query was successfully completed.")
                ->setData($result);
        } catch (RuntimeException $e) {
            $this->responseResult
                ->setCode(ResponseResult::ERROR)
                ->setMsg("SELECT " . $e->getMessage());
        }

        return $this->responseResult;
    }

    public function queryInsertId(InsertQuery $builder): ResponseResult
    {
        $executor = $this->executor('master');

        if (empty($executor)) {
            return $this->responseResult;
        }

        $this->responseResult->setQuery(
            QueryBuilder::interpolate(
                $builder->getSql(),
                $builder->getBindings()
            )
        );

        try {
            $result = $executor->queryInsertId($builder);

            if (!$result) {
                throw new RuntimeException('Failed to insert query.');
            }

            $this->responseResult
                ->setCode(ResponseResult::SUCCESS)
                ->setMsg('Insert query was successfully completed.')
                ->setData($result);
        } catch (RuntimeException $e) {
            $this->responseResult
                ->setCode(ResponseResult::ERROR)
                ->setMsg($e->getMessage());
        }

        return $this->responseResult;
    }

    public function queryUpdate(UpdateQuery|DeleteQuery $builder): ResponseResult
    {
        $executor = $this->executor('master');

        if (empty($executor)) {
            return $this->responseResult;
        }

        $this->responseResult->setQuery(
            QueryBuilder::interpolate(
                $builder->getSql(),
                $builder->getBindings()
            )
        );

        $queryType = $builder instanceof UpdateQuery ? 'Update' : 'Delete';

        try {
            $result = $executor->queryUpdate($builder);

            if ($result < 0) {
                throw new RuntimeException("Failed to {$queryType} query.");
            }

            $this->responseResult
                ->setCode(ResponseResult::SUCCESS)
                ->setMsg("{$queryType} query was successfully completed.")
                ->setData($result);
        } catch (RuntimeException $e) {
            $this->responseResult
                ->setCode(ResponseResult::ERROR)
                ->setMsg($e->getMessage());
        }

        return $this->responseResult;
    }

    public function getFoundRows(): int
    {
        try {
            $executor = ($this->executor('slave') ?: $this->executor('master'));
            $result = $executor->queryOne(
                QueryBuilder::select()
                    ->select("FOUND_ROWS() AS count")
            );

            return $result['count'];
        } catch (RuntimeException $e) {
            return 0;
        }
    }

    public function getRows(): int
    {
        try {
            $executor = $this->executor('master');
            $result = $executor->queryOne(
                QueryBuilder::select()
                    ->select("ROW_COUNT() AS row_count")
            );

            return $result['row_count'];
        } catch (RuntimeException $e) {
            return 0;
        }
    }

    public function startTransaction(): self
    {
        $this->database('master')->startTransaction();
        return $this;
    }

    public function commit(): self
    {
        $this->database('master')->commit();
        return $this;
    }

    public function rollback(): self
    {
        $this->database('master')->rollback();
        return $this;
    }
}
