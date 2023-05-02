/*
  알고리즘 교체하기

  [배경]
  - 복잡한 기존 코드를 간명한 방식으로 수정한다.
    - 목적을 달성하는 더 쉬운 코드가 있을 때
    - 코드와 똑같은 기능을 제공하는 라이브러리가 있을 때
    - 알고리즘을 살짝 다르게 동작하도록 바꾸고 싶을 때

  [절차]
  1. 교체할 코드를 함수 하나에 모은다.
  2. 이 함수만을 이용해 테스트를 한다.
  3. 대체할 알고리즘을 준비한다.
  4. 테스트한다.
  5. 기존 알고리즘과 새 알고리즘의 결과를 비교하는 테스트를 한다.
*/

function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') return 'Don';
    if (people[i] === 'John') return 'John';
    if (people[i] === 'Kent') return 'Kent';
  }

  return '';
}

function foundPersonRefactor(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find((p) => candidates.includes(p)) || '';
}
