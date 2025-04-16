<?php

namespace Core\Database\Queries;

use Core\Database\Trait\WhereClauseTrait;
use Interfaces\Database\IQueryBuilder;

class DeleteQuery implements IQueryBuilder
{
    use WhereClauseTrait;

    private string $tableField = '';

    public function table(string $table, ?string $alias = null): self
    {
        $this->tableField = $table . ($alias ? " AS {$alias}" : "");
        return $this;
    }

    public function getSql(): string
    {
        $sql = "DELETE FROM {$this->tableField}";
        $sql .= $this->buildWhereClause();
        return $sql;
    }
}
