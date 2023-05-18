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
