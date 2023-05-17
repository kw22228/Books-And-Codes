/** 애커먼 함수를 이용하자 */
function A(x, y) {
  if (y === 0) return 0;
  else if (x === 0) return 2 * y;
  else if (y === 1) return 2;
  else return A(x - 1, A(x, y - 1));
}
