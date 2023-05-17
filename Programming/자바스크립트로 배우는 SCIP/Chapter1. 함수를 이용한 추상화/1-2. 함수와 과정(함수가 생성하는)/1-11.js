/*
Q: 만일 n < 3이면 f(n) = n 이고
   만일 n >= 3이면 f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3)
   으로 정의되는 함수 f가 있다. 
   재귀적 과정과 반복적 과정을 짜보자.
*/
function f_tree(n) {}

function f_iter(n) {
  if (n < 3) return n;

  return f_iter(n - 1) + 2 * f_iter(n - 2) + 3 * f_iter(n - 3);
}

console.log(f_iter(6));
