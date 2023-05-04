function inc(n) {
  return n + 1;
}
function dec(n) {
  return n - 1;
}

function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b));
}
/*
  (+ 4 5)
  (inc (+ dec4 5))
  (inc (inc (+ dec3 5)))
  (inc (inc (inc (+ dec2 5))))
  (inc (inc (inc (inc (+ dec1 5)))))
  (inc (inc (inc (inc 5))))
  (inc (inc (inc 6)))
  (inc (inc 7))
  (inc 8)
  9

  재귀적 과정
*/

function plus2(a, b) {
  return a === 0 ? b : plus2(dec(a), inc(b));
}
/*
  + dec4 inc5
  + 4 5
  + 3 6
  + 2 7
  + 1 8
  + 0 9
  9

  반복적 과정
*/
