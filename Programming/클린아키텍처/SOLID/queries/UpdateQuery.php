<?php

namespace Core\Database\Queries;

use Core\Database\Trait\WhereClauseTrait;
use Interfaces\Database\IQueryBuilder;

class UpdateQuery implements IQueryBuilder
{
    use WhereClauseTrait;

    private string $tableField = '';
    private array $set = [];

    public function table(string $table): self
    {
        $this->tableField = $table;
        return $this;
    }

    public function set(array $data): self
    {
        foreach ($data as $column => $value) {
            $this->set[$column] = $value;
            $this->bindings[] = $value;
        }
        return $this;
    }

    public function getSql(): string
    {
        $setClauses = [];
        foreach (array_keys($this->set) as $column) {
            $setClauses[] = "{$column} = ?";
        }

        $sql = "UPDATE {$this->tableField} SET " . implode(', ', $setClauses);
        $sql .= $this->buildWhereClause();

        return $sql;
    }
}
