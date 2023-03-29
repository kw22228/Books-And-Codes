/*
  변수 인라인하기 <-> 변수 추출하기

  [배경]
  변수명이 원래 표현식과 다를바 없을 때 인라인으로 바꿔준다.

  [절차]
  1. 인라인 할 표현식에 사이드이펙트가 없는지 확인
  2. 상수인지 확인하고 상수가 아니라면 수정후 테스트한다.
    - 변수에 값이 한번 만 대입되는지 확인할 수 있음.
  3. 변수를 찾아서 인라인으로 변경해준다.
*/

function func() {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

/** 변수 인라인 */
function funcInline() {
  return anOrder.basePrice > 1000;
}
