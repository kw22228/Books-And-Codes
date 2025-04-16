<?php

namespace Core\Database;

use Core\Database\Queries\{SelectQuery, InsertQuery, UpdateQuery, DeleteQuery};


class QueryBuilder
{
    public static function select(): SelectQuery
    {
        return new SelectQuery();
    }

    public static function insert(): InsertQuery
    {
        return new InsertQuery();
    }

    public static function update(): UpdateQuery
    {
        return new UpdateQuery();
    }

    public static function delete(): DeleteQuery
    {
        return new DeleteQuery();
    }

    public static function interpolate(string $sql, array $bindings): string
    {
        foreach ($bindings as $binding) {
            $replacement = match (true) {
                is_null($binding) => 'NULL',
                is_bool($binding) => $binding ? '1' : '0',
                is_numeric($binding) => $binding,
                default => "'" . addslashes((string)$binding) . "'"
            };

            // replace only the first occurrence
            $sql = preg_replace('/\?/', $replacement, $sql, 1);
        }

        return $sql;
    }
}
