function sqrt_iter(guess, x) {
  //   return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
  return conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(a, b) {
  return (a + b) / 2;
}

function square(n) {
  return n ** 2;
}

function is_good_enough(guess, x) {
  return Math.abs(square(guess) - x) < 0.001;
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

console.log(conditional(2 === 3, 0, 5));

// console.log(sqrt(9));

/*
    3항 연사자를 하는순간 인수 우선 평가가 되기때문에
    sqrt_iter가 멈추지않고 무한루프를 돌게 됨.
*/
