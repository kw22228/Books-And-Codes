/*
  필드 내리기 <-> 필드 올리기

  [배경]
  - 서브 클래스 하나에서만 사용하는 필드는 슈퍼클래스에서 서브클래스로 옮겨주자.

  [절차]
  1. 대상 필드를 모든 서브클래스에 정의한다.
  2. 슈퍼클래스에서 그 필드를 제거한다.
  3. 이 필드를 사용하지 않는 모든 서브클래스에서 제거한다.
*/

class Employee {
  quota; // Salesperson 서브클래스에서만 사용중
  occupation;

  constructor(occupation, quota = null) {
    this.occupation = occupation;
    this.quota = quota;
  }
}
class Engineer extends Employee {
  constructor(occupation) {
    super(occupation);
  }
}
class Salesperson extends Employee {
  constructor(occupation, quota) {
    super(occupation, quota);
  }
}

/** 리팩터링 */
class EmployeeRefactor {
  //   quota; // 2.슈퍼클래스에서 필드 제거
  occupation;

  constructor(
    occupation
    // quota = null
  ) {
    this.occupation = occupation;
    // this.quota = quota;
  }
}
class EngineerRefactor extends EmployeeRefactor {
  //   quota; // 1.대상 필드를 모든 서브 클래스에 정의 -> 3.사용하지 않는 필드 제거
  constructor(occupation) {
    super(occupation);
  }
}
class SalespersonRefactor extends EmployeeRefactor {
  quota; // 1.대상 필드를 모든 서브 클래스에 정의
  constructor(occupation, quota) {
    // super(occupation, quota);
    super(occupation);
    this.quota = quota;
  }
}
