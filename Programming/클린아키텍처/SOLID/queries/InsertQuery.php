<?php

namespace Core\Database\Queries;

use Interfaces\Database\IQueryBuilder;

class InsertQuery implements IQueryBuilder
{
    private string $tableField = '';
    private array $columns = [];
    private array $bindings = [];
    private array $updateOnDuplicate = [];

    public function table(string $table): self
    {
        $this->tableField = $table;
        return $this;
    }

    public function insert(array $data): self
    {
        if (empty($data)) {
            throw new \InvalidArgumentException("Insert data cannot be empty.");
        }

        $this->columns = array_keys($data);
        $this->bindings = array_values($data);

        return $this;
    }

    public function onDuplicateKeyUpdate(array $data): self
    {
        foreach ($data as $column => $value) {
            $this->updateOnDuplicate[$column] = $value;
            $this->bindings[] = $value;
        }
        return $this;
    }

    public function getSql(): string
    {
        $columns = implode(', ', $this->columns);
        $placeholders = implode(', ', array_fill(0, count($this->columns), '?'));

        $sql = "INSERT INTO {$this->tableField} ({$columns}) VALUES ({$placeholders})";

        if (!empty($this->updateOnDuplicate)) {
            $updates = [];
            foreach (array_keys($this->updateOnDuplicate) as $column) {
                $updates[] = "{$column} = ?";
            }

            $sql .= " ON DUPLICATE KEY UPDATE " . implode(', ', $updates);
        }

        return $sql;
    }

    public function getBindings(): array
    {
        return $this->bindings;
    }
}
