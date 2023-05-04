function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function square(x) {
  return x * x;
}

function is_good_enough(guess, x) {
  return Math.abs(square(guess) - x) < 0.001;
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

console.log(sqrt(0.000004));
console.log(sqrt(9999999999999));

function is_good_enough_fixed(prevGuess, guess, x) {
  return Math.abs(guess - prevGuess) / x < 0.001;
}

function sqrt_iter_fixed(prevGuess, guess, x) {
  return is_good_enough_fixed(prevGuess, guess, x)
    ? guess
    : sqrt_iter_fixed(guess, improve(guess, x), x);
}

function sqrt_fixed(x) {
  return sqrt_iter_fixed(0, 1, x);
}

console.log(sqrt_fixed(0.000004));
console.log(sqrt_fixed(9999999999999));
/*
  기존의 is_good_enough 함수의 제곱근 판정 방식은 0.001의 고정 값이
  매우 작은 숫자의 제곱근 추측값을 찾기는 효과적이지 않다.
  따라서, guess의 변화량이 비율보다 작으면 충분히 좋은 추측값이라고 판정하는것으로 로직을 변경
  prevGuess라는 값을 넣어 현재 guess와 prevGuess의 변화량을 추측하고 그것으로 판정한다.
*/
