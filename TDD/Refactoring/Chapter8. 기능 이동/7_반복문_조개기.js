/*
  반복문 쪼개기 (솔직히 왜이렇게 하는지 이해좀 안됨.)

  [배경]
  - 반복문을 단일 목적만을 수행하는 여러개의 반복문으로 쪼개자.
    이렇게하면 성능이 안좋아질 수 있다는 느낌을 가질 수 있지만, 거의 일어나지않음. 또, 병목이 밝혀지면 그때가서 합치는건 간단하다.
  - 반복문 하나에서 두가지 이상의 목적을 일 할때 이것을 적용하자.

  [절차]
  1. 반복문을 복제해 두개로 만든다.
  2. 반복문이 중복되서 생기는 부수효과를 파악해서 제거하자.
  3. 테스트.
  4. 완료되었으면, 각 반복문을 함수로 추출할지 고민한다.
*/

function someFunc(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    //두 코드는 아예 다른 행동을 하고 있음. (연관이 아예없다)
    if (p.age < youngest) youngest = p.age;

    totalSalary += p.salary;
  }

  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}

/** Refactoring (youngest와 totalSalary는 아예 다른 일을 하고있으므로 반복문을 쪼개자) */
function someFuncRefactor(people) {
  return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;

  //각 반복문 함수로 추출
  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }
  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }
}
