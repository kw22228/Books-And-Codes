function sum(term, a, next, b, result) {
  return a > b ? result : sum(term, next(a), next, b, result + term(a));
}
function cube(a) {
  return a ** 3;
}
const inc = (n) => (a) => a + n;
console.log(sum(cube, 1, inc(1), 3, 0));
