/*
  생성자를 팩터리 함수로 바꾸기

  [배경]
  - 생성자는 일반함수에는 없는 제약이 따라붙는다. 그것을 해결하기위해 팩토리 함수로 생성자를 호출해보자.

  [절차]
  1. 팩터리 함수를 만든다. 팩터리 함수의 본문에서는 원래의 생성자를 호출한다.
  2. 생성자를 호출하던 코드를 팩터리 함수 호출로 바꾼다.
  3. 생성자의 가시 범위가 최소가 되도록 제한한다.
*/

class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    };
  }
}

let candidate = new Employee(document.name, document.empType);
let leadEngineer = new Employee(document.leadEngineer, 'E');

/** 리팩터링 */

// 1. 팩터리 함수를 만들고 생성자를 호출한다.
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

// 2. 생성자를 호출하던 코드를 팩토리 함수로 대체한다.
candidate = createEmployee(document.name, document.empType);
leadEngineer = createEmployee(document.leadEngineer, 'E');

// 3. 가시 범위 최소화 하기
function createEngineer(name) {
  return new Employee(name, 'E');
}
leadEngineer = createEngineer(document.lead);
