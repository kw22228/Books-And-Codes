/*
  앞의 고차함수를 이용한 함수 추상화에서 처럼
  고차함수를 하나하나 만들어서 매개변수로 넘겨주면 상당히 귀찮다. (cube, pi, inc, etc...)
  이러한 것을 람다 표현식을 도입하여 그자리에서 바로 명시하자.

  즉, 람다식은 함수 선언과 동일한 방식으로 함수를 작성하되, 
  함수의 이름과 return키워드, 함수 본문의 중괄호쌍을 생략한 것이다.
*/
function cube(a) {
  return a ** 3;
}

function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function pi_sum(a, b) {
  return sum(
    (x) => 1 / (x * (x + 2)),
    a,
    (x) => x + 4,
    b
  );
}

function integral(f, a, b, dx) {
  return sum(f, a + dx / 2, (x) => x + dx, b) * dx;
}

console.log(pi_sum(2, 10));
console.log(integral(cube, 0, 1, 0.01));

//////////// const를 이용한 지역 이름 만들기 //////////////
function f(x, y) {
  function f_helper(a, b) {
    return x * square(a) + y * b + a * b;
  }
  return f_helper(1 + x * y, 1 - y);
}

function f_2(x, y) {
  return ((a, b) => x * square(a) + y * b + a * b)(1 + x * y, 1 - y);
}

function f_3(x, y) {
  const a = 1 + x * y;
  const b = 1 - y;

  return x * square(a) + y * b + a * b;
}

//////////////// 조건문 ///////////////////
function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? (expmod(base, exp / 2, m) * expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

function expmod_2(base, exp, m) {
  const half_exp = expmod(base, exp / 2, m); // exp === 0의 밖에 있어 무한루프를 유발함.
  return exp === 0
    ? 1
    : is_even(exp)
    ? (half_exp * half_exp) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

function expmod_3(base, exp, m) {
  if (exp === 0) return 1;
  if (!is_even(exp)) return (base * expmod(base, exp - 1, m)) % m;

  const half_exp = expmod(base, exp / 2, m);
  return (half_exp * half_exp) % m;
}
