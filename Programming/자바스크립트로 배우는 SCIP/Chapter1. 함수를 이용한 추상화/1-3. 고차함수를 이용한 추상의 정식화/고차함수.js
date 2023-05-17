function sum_integers(a, b) {
  return a > b ? 0 : a + sum_integers(a + 1, b);
}

function sum_cubes(a, b) {
  return a > b ? 0 : cube(a) + sum_cubes(a + 1, b);
}
function cube(a) {
  return a ** 3;
}

function pi_sum(a, b) {
  return a > b ? 0 : 1 / (a * (a + 2)) + pi_sum(a + 4, b);
}

/** 위의 3개의 공통의 패턴을 매개변수로 핸들링 */
function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}
function sum_cubes2(a, b) {
  return sum(cube, a, inc(1), b);
}
function pi_sum2(a, b) {
  function pi(a) {
    return 1 / (a * (a + 2));
  }
  return sum(pi, a, inc(4), b);
}
const inc = (n) => (a) => a + n;

function integral(f, a, b, dx) {
  return sum(f, a + dx / 2, inc(dx), b) * dx;
}

console.log(sum_cubes2(1, 2));
console.log(pi_sum(2, 10));
console.log(integral(cube, 0, 1, 0.01));
