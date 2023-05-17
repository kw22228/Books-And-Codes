function product(term, a, next, b, result) {
  return a > b ? result : product(term, next(a), next, b, term(a) * result);
}
