<?php

namespace Core\Database;

use Core\Database\Queries\{SelectQuery, InsertQuery, UpdateQuery, DeleteQuery};

class QueryExecutor
{
    private Database $db;

    public function __construct(Database $db)
    {
        $this->db = $db;
    }

    public function query(SelectQuery $builder): array
    {
        return $this->db->fetchAll($builder->getSql(), $builder->getBindings());
    }

    public function queryOne(SelectQuery $builder)
    {
        return $this->db->fetch($builder->getSql(), $builder->getBindings());
    }

    public function queryInsertId(InsertQuery $builder): bool|string
    {
        $this->db->execute($builder->getSql(), $builder->getBindings());
        return $this->db->lastInsertId();
    }

    public function queryUpdate(UpdateQuery|DeleteQuery $builder): int
    {
        return $this->db->rowCount($builder->getSql(), $builder->getBindings());
    }
}
