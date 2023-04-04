/*
  중개자 제거하기 <-> 위임 숨기기

  [배경]
  - 서버 클래스가 단순히 중개자 역할만 할 때 제거하자.

  [절차]
  1. 위임 객체를 얻는 게터를 만든다.
  2. 위임 메서드를 호출하는 클라이언트가 모두 이 게터를 거치게 만든다.
*/

class Person {
  constructor(manager) {
    this._department = new Department(manager);
  }

  /** 중개자 제거하기 */
  //   get manager() {
  //     return this._department.manager;
  //   }

  get department() {
    return this._department;
  }
}
class Department {
  constructor(manager) {
    this._manager = manager;
  }

  get manager() {
    return this._manager;
  }
}

const aPerson = new Person('JW');
// const manager = aPerson.manager;
const manager = aPerson.department.manager; // <--- 중개자 제거하기
