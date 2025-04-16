<?php

namespace Core\Database;

use PDO;
use Exception;
use PDOException;
use PDOStatement;

class Database
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getPdo(): PDO
    {
        if (empty($this->pdo) || !$this->pdo instanceof PDO) {
            throw new Exception('PDO is not defined.');
        }

        return $this->pdo;
    }

    /* Fetch */
    private function run(string $sql, array $bindings = []): PDOStatement
    {
        try {
            $stmt = $this->getPdo()->prepare($sql);

            $exception = new PDOException(implode(',', $this->pdo->errorInfo()) . "[{$sql}]");
            if (!$stmt) throw $exception;


            $result = $stmt->execute($bindings);
            if (!$result) throw $exception;


            return $stmt;
        } catch (PDOException $e) {
            throw new \RuntimeException("Query failed: " . $e->getMessage(), 0, $e);
        }
    }

    public function execute(string $sql, array $bindings = []): bool
    {
        $this->run($sql, $bindings);
        return true;
    }

    public function fetchAll(string $sql, array $bindings = []): array
    {
        return $this->run($sql, $bindings)->fetchAll(PDO::FETCH_ASSOC);
    }

    public function fetch(string $sql, array $bindings = [])
    {
        return $this->run($sql, $bindings)->fetch(PDO::FETCH_ASSOC);
    }

    public function fetchColumn(string $sql, array $bindings = [], int $column = 0)
    {
        return $this->run($sql, $bindings)->fetchColumn($column);
    }

    public function rowCount(string $sql, array $bindings = []): int
    {
        return $this->run($sql, $bindings)->rowCount();
    }

    public function lastInsertId(): bool|string
    {
        return $this->getPdo()->lastInsertId();
    }

    /* Transaction */
    public function inTransaction(): bool
    {
        return $this->getPdo()->inTransaction();
    }

    public function startTransaction(): bool
    {
        if ($this->inTransaction()) return false;
        return $this->getPdo()->beginTransaction();
    }

    public function commit(): bool
    {
        if (!$this->inTransaction()) return false;
        return $this->getPdo()->commit();
    }

    public function rollback(): bool
    {
        if (!$this->inTransaction()) return false;
        return $this->getPdo()->rollBack();
    }
}
