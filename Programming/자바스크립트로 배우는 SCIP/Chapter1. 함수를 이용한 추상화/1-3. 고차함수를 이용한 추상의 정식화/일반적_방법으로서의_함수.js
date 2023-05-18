/*
  [ 이분법을 이용한 방정식 근 구하기 ]
  이분법 : f(a) < 0 < f(b) 라면 이 사이에는 무조건 0이 한번은 있다.
           이 영점을 추측하기 위해 구간이 충분히 작아질때까지 계속 절반으로 분할하는 작업을 한다.
*/

/**
 * 이분법을 이용하여 영점을 구하는 함수
 * @param {any} f 근을 구하는 함수 (음수와 양수의 근이 충분히 작으면 답 즉, 음수와 양수의 차이가 충분히 가까우면 답이다)
 * @param {number} neg_point 음수
 * @param {number} pos_point 양수
 * @returns close_enough를 통과한 영점
 */
function search(f, neg_point, pos_point) {
  const midpoint = average(neg_point, pos_point);
  if (close_enough_search(neg_point, pos_point)) {
    return midpoint;
  } else {
    const test_value = f(midpoint);
    return positive(test_value)
      ? search(f, neg_point, midpoint)
      : negative(test_value)
      ? search(f, midpoint, pos_point)
      : midpoint;
  }
}

/** 구간이 충분히 작은지 판정하는 함수 (tolerance를 유동적으로 사용하기 위해 커링으로 바꿈) */
const close_enough = (tolerance) => (x, y) => Math.abs(x - y) < tolerance;
const close_enough_search = close_enough(0.001);

/** search의 매개변수에 양수와 음수를 바꿔써 오류가 날 가능성을 해결하기 위한 함수 */
function half_interval_method(f, a, b) {
  const a_value = f(a);
  const b_value = f(b);
  return negative(a_value) && positive(b_value)
    ? search(f, a, b)
    : negative(b_value) && positive(a_value)
    ? search(f, b, a)
    : error('Values are not of opposite sign');
}
function average(a, b) {
  return (a + b) / 2;
}
function positive(a) {
  return a > 0;
}
function negative(a) {
  return a < 0;
}

console.log(half_interval_method(Math.sin, 2, 4));
console.log(half_interval_method((x) => x * x * x - 2 * x - 3, 1, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  [ 함수의 고정점 구하기 ]
  고정점이란?
  - f(x) = x 를 충족하는 수 x를 f의 고정점이라고 한다.
    즉, 초기 추측값에서 출발해서 함수의 결과값이 별로 변하지 않을때까지 f를 반복해서 적용하면 f의 고정점을 발견할 수 있다.
    f(x) -> f(f(x)) -> f(f(f(x))) -> ....
*/

/**
 * 고차함수 f에 대한 고정값을 구하는 함수
 * @param {any} f : 고정점 함수
 * @param {number} first_guess  : 초기 추측값
 * @returns close_enough 통과한 고정값.
 */
function fixed_point(f, first_guess) {
  const close_enough_fixed = close_enough(0.00001);
  const try_with = (guess) => {
    const next = f(guess);
    return close_enough_fixed(guess, next) ? next : try_with(next);
  };

  return try_with(first_guess);
}

console.log(fixed_point(Math.cos, 1));
console.log(fixed_point((y) => Math.sin(y) + Math.cos(y), 1));

function sqrt(x) {
  return fixed_point((y) => average(y, x / y), 1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  [ 함수를 돌려주는 함수 ]
  반환값으로 함수를 돌려주는 함수를 이용하면 언어의 표현력을 더욱 높일 수 있다.
*/

// 1.
function average_damp(f) {
  return (x) => average(x, f(x));
}
console.log(average_damp((x) => x ** 2)(10));

function customSqrt(x) {
  return fixed_point(
    average_damp((y) => x / y),
    1
  );
}

// 2.
const dx = 0.00001;
function deriv(g) {
  return (x) => (g(x + dx) - g(x)) / dx;
}

function cube(x) {
  return x * x * x;
}

const deriv_cube = deriv(cube);
console.log(deriv_cube(5));

/** 뉴턴 방법을 고정정 검색 과정으로 */
function newton_transform(g) {
  return (x) => x - g(x) / deriv(g)(x);
}
function newtons_method(g, guess) {
  return fixed_point(newton_transform(g), guess);
}
function newton_sqrt(x) {
  return newtons_method((y) => y ** 2 - x, 1);
}

/*
   추상화와 일급 함수 
   아래의 예제처럼 고차함수들을 이용하여 다른 기능을 하는 추상들을 만들어 낼 수 있다.
 */
function fixed_point_of_transform(g, transform, guess) {
  return fixed_point(transform(g), guess);
}

// 고정점 검색방법
function sqrt_fixed_point_of_transform(x) {
  return fixed_point_of_transform((y) => x / y, average_damp, 1);
}

//뉴턴 방법
function sqrt_newton_fixed_point_of_transform(x) {
  return fixed_point_of_transform((y) => y ** 2 - x, newton_transform, 1);
}
