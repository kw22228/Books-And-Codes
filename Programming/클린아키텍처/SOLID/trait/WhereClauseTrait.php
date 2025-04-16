<?php

namespace Core\Database\Trait;

use Enum\Database\{SqlOperator};

trait WhereClauseTrait
{
    protected array $whereConditions = [];
    protected array $bindings = [];

    public function where(string $column, string $operator, mixed $value = null): self
    {
        $this->appendWhereCondition($column, $operator, $value, 'AND');
        return $this;
    }

    /**
     * @param array<int, array{string, string, mixed}> $conditions [column: string, operator: string, value: string][]
     * @return void
     */
    public function whereOr(array $conditions): self
    {
        $originConditions = $this->whereConditions;
        $this->whereConditions = [];
        $isFirst = true;

        foreach ($conditions as [$column, $operator, $value]) {
            $this->appendWhereCondition($column, $operator, $value, $isFirst ? '' : 'OR');
            $isFirst = false;
        }

        $orClause = implode(' ', $this->whereConditions);
        $this->whereConditions = $originConditions;

        if (!empty($this->whereConditions)) {
            $this->whereConditions[] = "AND ($orClause)";
        } else {
            $this->whereConditions[] = "($orClause)";
        }

        return $this;
    }

    public function whereRaw(string $expression)
    {
        $this->whereConditions[] = (!empty($this->whereConditions) ? "AND " : "") . $expression;
    }

    private function appendWhereCondition(string $column, string $operator, mixed $value, string $boolean)
    {
        $operator = strtoupper($operator);
        if (!in_array($operator, SqlOperator::values(), true)) {
            throw new \InvalidArgumentException("Unsupported operator: {$operator}");
        }

        $clause = '';

        if (in_array(
            $operator,
            [
                SqlOperator::IS_NULL->value,
                SqlOperator::IS_NOT_NULL->value,
                SqlOperator::IS_TRUE->value,
                SqlOperator::IS_FALSE->value
            ],
            true
        )) {

            /* IS NULL, IS NOT NULL, IS TRUE, IS FALSE */
            $clause = "{$column} {$operator}";
        } else if (in_array($operator, [SqlOperator::IN->value, SqlOperator::NOT_IN->value], true)) {

            /* IN, NOT IN */
            if (!is_array($value) || count($value) === 0) {
                throw new \InvalidArgumentException("{$operator} requires a non-empty array value.");
            }

            $placeholders = implode(', ', array_fill(0, count($value), '?'));
            $clause = "{$column} {$operator} ({$placeholders})";
            $this->bindings = array_merge($this->bindings, $value);
        } else if ($operator === SqlOperator::BETWEEN->value) {

            /* BETWEEN */
            if (!is_array($value) || count($value) !== 2) {
                throw new \InvalidArgumentException("BETWEEN requires an array with exactly two values.");
            }

            [$a, $b] = $value;
            $clause = "{$column} BETWEEN ? AND ?";
            $this->bindings[] = $a;
            $this->bindings[] = $b;
        } else if (in_array($operator, [SqlOperator::EXISTS->value, SqlOperator::NOT_EXISTS->value], true)) {

            /* EXISTS, NOT EXISTS */
            if (method_exists($value, 'getSql') && method_exists($value, 'getBindings')) {
                $subSql = $value->getSql();
                $this->bindings = array_merge($this->bindings, $value->getBindings());
                $clause = "{$operator} ({$subSql})";
            } else if (is_string($value)) {
                $clause = "{$operator} ($value)";
            } else {
                throw new \InvalidArgumentException("{$operator} requires a subquery string or SelectQuery");
            }
        } else {
            $clause = "{$column} {$operator} ?";
            $this->bindings[] = $value;
        }

        if (!empty($this->whereConditions) && $boolean) {
            $clause = "{$boolean} {$clause}";
        }

        $this->whereConditions[] = $clause;
    }

    protected function buildWhereClause(): string
    {
        return !empty($this->whereConditions)
            ? " WHERE " . implode(' ', $this->whereConditions)
            : '';
    }

    public function getBindings(): array
    {
        return $this->bindings;
    }
}
