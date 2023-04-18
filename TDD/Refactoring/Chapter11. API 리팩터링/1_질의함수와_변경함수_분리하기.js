/*
  질의 함수와 변경 함수 분리하기

  [배경]
  - 질의함수는 사이드이펙트가 없어야한다. (순수 함수)
  - 사이드이펙트가 있는곳은 따로 함수를 추출하여 분리해야 한다.

  [절차]
  1. 대상 함수를 복제하고 질의 목적에 충실한 이름을 짓는다.
  2. 새 질의 함수에서 사이드이펙트를 모두 제거.
  3. 원래 함수를 호출하는곳을 찾아내어 새 질의 함수를 호출하게 바꾸고 원래 함수를 호출하는 코드 바로 아래줄에 새로 추가한다.
  4. 원래 함수에서 질의 관련 코드 삭제.
*/

function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      setOfAlarms();
      return '조커';
    }
    if (p === '시루만') {
      setOfAlarms();
      return '시루만';
    }
  }

  return '';
}

/** 리팩토링 */
function alertForMiscreantRefactor(people) {
  if (findMiscreant(people) !== '') setOfAlarms();
}

// 1. 함수를 복제하고 질의 목적에 맞는 이름 짓기. (악당찾기 함수 => findMiscreant)
function findMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      //   setOfAlarms(); // 2. 사이드이펙트를 낳는 부분 삭제
      return '조커';
    }
    if (p === '시루만') {
      //   setOfAlarms(); // 2. 사이드이펙트를 낳는 부분 삭제
      return '시루만';
    }
  }

  return '';
}
// const found  = alertForMiscreant(people);

// 3. 새로운 질의 함수를 호출하고 바로 아래줄에 원래 함수 추가
const found = findMiscreant(people); // 질의 함수
alertForMiscreantRefactor(people); // 변경 함수
