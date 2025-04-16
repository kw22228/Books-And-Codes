<?php

namespace Core\Database\Queries;

use Core\Database\Trait\WhereClauseTrait;
use Enum\Database\{SqlOperator, SqlJoinType, SqlOrderByDirection};
use Interfaces\Database\IQueryBuilder;

class SelectQuery implements IQueryBuilder
{
    use WhereClauseTrait;

    private array $selectFields = [];
    private bool $isTotal = false;

    private string $tableField = '';
    private array $joins = [];

    private array $groupByFields = [];
    private array $havingConditions = [];

    private array $orderByFields = [];

    private ?int $limitField = null;
    private ?int $offset = null;

    private array $subQueries = [];

    private ?SelectQuery $unionField = null;
    private bool $unionAll = false;

    public function getIsTotal(): bool
    {
        return $this->isTotal;
    }

    /**
     * Limit에 대한 정보.
     * @return array{?int, ?int}
     */
    public function getLimit(): array
    {
        return [
            $this->limitField,
            $this->offset
        ];
    }

    public function table(string|SelectQuery $table, ?string $alias = null): self
    {
        /** 서브 쿼리 일때 */
        if ($table instanceof SelectQuery) {
            $sql = $table->getSql();
            $this->bindings = array_merge($this->bindings, $table->getBindings());
            $this->tableField = "(" . $sql . ")" . ($alias ? " AS {$alias}" : "");
        } else {
            $this->tableField = $table . ($alias ? " AS {$alias}" : "");
        }
        return $this;
    }

    public function total(bool $isTotal = true): self
    {
        $this->isTotal = $isTotal;
        return $this;
    }

    public function select(array|string $fields): self
    {
        $this->selectFields = is_array($fields) ? $fields : [$fields];
        return $this;
    }

    public function selectRaw(string $expression): self
    {
        $this->selectFields[] = $expression;
        return $this;
    }

    public function selectSub(SelectQuery $builder, string $alias): self
    {
        $this->selectFields[] = "(" . $builder->getSql() . ") AS {$alias}";
        $this->bindings = array_merge($this->bindings, $builder->getBindings());
        return $this;
    }

    public function join(
        string $table,
        string $first,
        string $operator,
        string $second,
        string $type = SqlJoinType::INNER->value,
        ?string $alias = null
    ): self {
        $typeEnum = SqlJoinType::tryFrom(strtoupper($type)) ?? SqlJoinType::INNER;

        $operator = strtoupper($operator);
        if (!in_array($operator, SqlOperator::values(), true)) {
            throw new \InvalidArgumentException("Unsupported join operator: {$operator}");
        }

        if ($alias) {
            $table = "{$table} AS {$alias}";
        }

        $this->joins[] = $typeEnum->sql() . " {$table} ON {$first} {$operator} {$second}";
        return $this;
    }



    public function groupBy(array|string $columns): self
    {
        $this->groupByFields = array_merge($this->groupByFields, is_array($columns) ? $columns : [$columns]);
        return $this;
    }

    public function having(string $column, string $operator, mixed $value): self
    {
        $this->bindings[] = $value;
        $this->havingConditions[] = "{$column} {$operator} ?";
        return $this;
    }

    public function orderBy(string $column, string $direction = SqlOrderByDirection::ASCENDING->value): self
    {
        if (!in_array($direction, SqlOrderByDirection::values(), true)) {
            throw new \InvalidArgumentException('Invalid orderby direction type.');
        }

        $this->orderByFields[] = "{$column} {$direction}";
        return $this;
    }

    public function orderByRaw(string $expression): self
    {
        $this->orderByFields[] = $expression;
        return $this;
    }

    public function limit(int $limit, int $offset = 0): self
    {
        $this->limitField = $limit;
        $this->offset = $offset;
        return $this;
    }

    public function union(SelectQuery $builder, bool $all = false): self
    {
        $this->unionField = $builder;
        $this->unionAll = $all;
        $this->bindings = array_merge($this->bindings, $builder->getBindings());
        return $this;
    }

    public function getSql(): string
    {
        $sql = "SELECT " . ($this->isTotal ? "SQL_CALC_FOUND_ROWS " : "") . implode(", ", $this->selectFields);

        if (!empty($this->tableField)) {
            $sql .= " FROM {$this->tableField}";
        }

        if (!empty($this->joins)) {
            $sql .= ' ' . implode(' ', $this->joins);
        }

        /* Add where clause */
        $sql .= $this->buildWhereClause();

        if (!empty($this->groupByFields)) {
            $sql .= " GROUP BY " . implode(", ", $this->groupByFields);
        }

        if (!empty($this->havingConditions)) {
            $sql .= " HAVING " . implode(' AND ', $this->havingConditions);
        }

        if (!empty($this->orderByFields)) {
            $sql .= " ORDER BY " . implode(", ", $this->orderByFields);
        }

        if (isset($this->limitField)) {
            $sql .= " LIMIT {$this->limitField}";
            if (isset($this->offset)) {
                $sql .= " OFFSET {$this->offset}";
            }
        }

        if ($this->unionField instanceof SelectQuery) {
            $unionSql = $this->unionField->getSql();
            $sql = "($sql) " . ($this->unionAll ? "UNION ALL" : "UNION") . " ($unionSql)";
        }

        return $sql;
    }

    public function getSubQueries(): array
    {
        return $this->subQueries;
    }
}
