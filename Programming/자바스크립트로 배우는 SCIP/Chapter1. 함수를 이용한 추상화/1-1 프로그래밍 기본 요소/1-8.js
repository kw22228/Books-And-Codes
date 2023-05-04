function sqrt(x) {
  return sqrt_iter(0, 1, x);
}

function sqrt_iter(prevGuess, guess, x) {
  return is_good_enough(prevGuess, guess, x) ? guess : sqrt_iter(guess, improve(guess, x), x);
}

function is_good_enough(prevGuess, guess, x) {
  return Math.abs(guess - prevGuess) / x < 0.0001;
}

function improve(guess, x) {
  return (x / square(guess) + 2 * guess) / 3; // (x/y2 + 2y) / 3
}

function square(n) {
  return n ** 2;
}

console.log(sqrt(27));

/*
  (x/y2 + 2y) / 3 를 추측값으로 하자.
*/
