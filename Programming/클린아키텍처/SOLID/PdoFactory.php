<?php

namespace Core\Database;

use PDO;
use PDOException;
use RuntimeException;

/**
 * @phpstan-type TDbConfig array{
 *   DB_HOST: ?string,
 *   DB_PORT: ?string,
 *   DB_USER: ?string,
 *   DB_PASSWORD: ?string,
 *   DB_NAME: ?string,
 *   DB_CHARSET: ?string,
 *   OPTIONS: ?array,
 *  } 
 */
class PdoFactory
{
    /** @var TDbConfig */
    private array $config = [];

    /**
     * @param TDbConfig $config
     * @return PdoFactory
     */
    public function setConfig(array $config): self
    {
        $this->config = $config;
        return $this;
    }

    /**
     * @throws \PDOException
     * @return TDbConfig
     */
    private function getConfig(): array
    {
        if (empty($this->config)) throw new PDOException('Database config is missing.');
        return $this->config;
    }


    private function createDSN(): string
    {
        @[
            'DB_HOST' => $dbHost,
            'DB_PORT' => $dbPort,
            'DB_NAME' => $dbName,
            'DB_CHARSET' => $dbCharset
        ] = $this->getConfig();

        if (empty($dbHost) || empty($dbName)) {
            throw new PDOException('Database host, name is required.');
        }

        $dsnParams = [
            'mysql:host' => $dbHost,
            'port' => $dbPort,
            'dbname' => $dbName,
            'charset' => $dbCharset
        ];
        return trim(
            array_reduce(array_keys($dsnParams), function ($carry, $key) use ($dsnParams) {
                if ($key === 'charset' && empty($dsnParams[$key])) $dsnParams[$key] = 'utf8mb4';
                if (empty($dsnParams[$key])) return $carry;

                $carry .= "{$key}={$dsnParams[$key]};";
                return $carry;
            }, ''),
            ";"
        );
    }

    public function create(): PDO
    {
        @[
            'DB_USER' => $dbUser,
            'DB_PASSWORD' => $dbPassword,
            'OPTIONS' => $options
        ] = $this->getConfig();

        try {
            $pdo = new PDO($this->createDSN(), $dbUser, $dbPassword, $options ?? []);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $pdo;
        } catch (PDOException $e) {
            throw new RuntimeException("Database connection error : " . $e->getMessage(), 0, $e);
        }
    }
}
