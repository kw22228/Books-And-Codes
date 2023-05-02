/*
  슈퍼클래스 추출하기

  [배경]
  - 비슷한 일을 수행하는 두 클래스가 보이면 상속을 이용하여 비슷한 부분을 공통의 슈퍼클래스로 만들자.
    - 공통된 부분이 데이터라면 필드 올리기(12-2)를 활용.
    - 공통된 부분이 동작이라면 메서드 올리기(12-1)를 활용.
  - 나중에 필요해지면 슈퍼클래스를 위임으로 바꾸기(12-11)를 해보자.

  [절차]
  1. 빈 슈퍼클래스를 만들고 원래의 클래스들이 새 클래스를 상속하도록 한다.
  2. 생성자 본문 올리기(12-3), 메서드 올리기(12-1), 필드 올리기(12-2)를 차례로 적용하여 공통 원소를 옮긴다.
  3. 서브클래스에 남은 메서드들을 검토한다. 공통되는 부분이 있다면 함수로 추출하고 메서드 올리기(12-1)을 적용하자.
  4. 원래 클래스들을 사용하는 코드를 검토하여 슈퍼클래스의 인터페이스를 사용하게 할지 고민한다.
*/

class Employee {
  constructor(name, id, monthlyCost) {
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this._monthlyCost;
  }
  get name() {
    return this._name;
  }
  get id() {
    return this._id;
  }

  get annualCost() {
    return this._monthlyCost * 12;
  }
}
class Department {
  constructor(name, staff) {
    this._name = name;
    this._staff = staff;
  }
  get staff() {
    return this._staff;
  }
  get name() {
    return this._name;
  }

  get totalMonthlyCost() {
    return this.staff.map((e) => e.monthlyCost).reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.lenfth;
  }
  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
  }
}

/** 리팩터링 */

// 1.빈 슈퍼클래스를 만든다.
class Party {
  // 2. 공통 필드 올리기
  constructor(name) {
    this._name = name;
  }

  // 3. 공통 메서드 올리기
  get name() {
    return this._name;
  }
  // 공통 메서드명을 통일해준다.
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

// 1.새 클래스를 상속한다.
class EmployeeRefactor extends Party {
  constructor(name, id, monthlyCost) {
    super(name); // 2.공통되는 필드를 올려주고 서브클래스의 필드는 제거한다.
    // this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this._monthlyCost;
  }
  //   get name() { // 3.공통 메서드 올리기를 실행
  //     return this._name;
  //   }
  get id() {
    return this._id;
  }

  //   get annualCost() { // 3.공통 메서드 올리기를 실행
  //     return this._monthlyCost * 12;
  //   }
}

// 1.새 클래스를 상속한다.
class DepartmentRefactor extends Party {
  constructor(name, staff) {
    super(name); // 2.공통되는 필드를 올려주고 서브클래스의 필드는 제거한다.
    // this._name = name;
    this._staff = staff;
  }
  get staff() {
    return this._staff;
  }
  //   get name() { // 3.공통 메서드 올리기를 실행
  //     return this._name;
  //   }

  //   get totalMonthlyCost() { // 메서드명 통일해주자.
  get monthlyCost() {
    return this.staff.map((e) => e.monthlyCost).reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.lenfth;
  }
  //   get totalAnnualCost() { // 3.공통 메서드 올리기를 실행
  //     return this.totalMonthlyCost * 12;
  //   }
}
