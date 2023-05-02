/*
  함수 매개변수화하기

  [배경]
  - 로직이 아주 비슷한 함수가 있으면 해당 로직의 다른 값만 매개변수로 받아 하나의 함수로 합쳐 중복을 없애자.

  [절차]
  1. 비슷한 함수 중 하나를 선택한다.
  2. 함수 선언 바꾸기로 리터럴들을 매개변수로 추가한다.
  3. 이 함수를 호출하는 곳 모두에 적절한 리터럴 값을 추가한다.
  4. 매개변수로 받은 값을 사용하도록 함수 본문을 수정한다.
  5. 비슷한 다른 함수를 호출하는 코드를 찾아 매개변수화된 함수를 호출하도록 수정한다.
*/

function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

/** 리팩터링 (함수에 매개변수를 새로받고 하나로 합친다.) */
function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}

///////////////////////////////////////////////////////////////

function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount = bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;

  return usd(amount);
}

function bottomBand(usage) {
  return Math.min(usage, 100);
}
function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}
function topBand(usage) {
  return usage > 200 ? usage - 200 : 0;
}

/** 리팩터링 (Band 함수들을 하나로 합치자) */
function withBand(usage, bottom, top) {
  //   return usage > 100 ? Math.min(usage, 200) - 100 : 0; // 범위를 다루는 로직은 중간에 해당하는 함수에서 시작하자. (middleBand)
  return usage > bottom ? Math.min(usage, top) - bottom : 0; // 함수에서 사용하던 리터럴들을 적절한 매개변수로 대체한다. (100 => bottom, 200 => top)
}

function baseChargeRefacotr(usage) {
  if (usage < 0) return usd(0);
  const amount = // 새로 만든 매개변수화 함수를 호출해준다.
    withBand(usage, 0, 100) * 0.03 +
    withBand(usage, 100, 200) * 0.05 +
    withBand(usage, 200, Infinity) * 0.07; // Infinity를 넣어 무조건 usage가 return되게 만듬

  return usd(amount);
}
