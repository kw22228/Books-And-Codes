/*
  인라인 코드를 함수 호출로 바꾸기

  [배경]
  - 똑같은 코드를 반복하는 대신 함수 호출로 변경하자.
  - 해당 기능을 하는 함수가 이미 존재한다면 이방법을 사용하자.
  - 해당 기능을 하는 함수가 없다면 함수 추출하기를 사용하자
  - 동일한 목적의 같은 코드가 반복되고, 해당 목적의 함수가 존재할 때, 비슷한 코드가 있더라도 목적이 다르면 적용하지 않는다.

  [절차]
  1. 인라인 코드를 함수 호출로 대체한다.
*/

let appliesToMass = false;
const states = [];
for (const s of states) {
  if (s === 'MA') {
    appliesToMass = true;
  }
}

/** Refactoring */
appliesToMass = states.includes('MA');
