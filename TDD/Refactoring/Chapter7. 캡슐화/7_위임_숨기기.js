/*
  위임 숨기기 <-> 중개자 제거하기

  [배경]
  - 클라이언트는 위임객체의 존재를 모르기때문에 캡슐화 되어있는 코드가 바뀌어도 
    서비스에 영향을 미치지 않는다. (객체의 인터페이스가 바뀌어도 클라이언트는 같은 Getter를 호출함)

  [절차]
  1. 위임 객체의 각 메서드에 해당하는 위임 메서드를 서버에 생성한다.
  2. 클라이언트가 위임 객체 대신 서버를 호출하도록 수정.
  3. 서버로부터 위임 객체를 얻는 접근자를 제거하자.
*/

class Person {
  constructor({ name, chargeCode, manager }) {
    this._name = name;
    this._department = new Department(chargeCode, manager);
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }

  get manager() {
    return this._department.manager;
  }
}

class Department {
  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

const person = new Person({ name, chargeCode, manager });
// const manager = person.department.manager;
const manager = person.manager; // <---- 위임 숨기기 (department 접근자를 제거함)
