/*
  타입 코드를 서브클래스로 바꾸기 <-> 서브클래스 제거하기(12-7)
  
  [배경]
  - 타입코드 이상으로 더 필요할 때는 서브클래스를 만들어서 사용하자.
    1. 다형성을 제공할 수 있다.
    2. 특정 타입에서만 의미가 있는 값을 사용하는 필드나 메서드를 구현할 수 있다.

  [절차]
  1. 타입 코드 필드를 자가 캡슐화 하자.
  2. 타입 코드 값 하나를 선택하여 그 값에 해당하는 서브클래스를 만들자. 
     타입 코드 게터를 오버라이드하여 해당 타입 코드의 리터럴 값을 반환하게 한다.
  3. 매개변수로 받은 타입 코드와 방금 만든 서브클래스를 매핑하는 선택 로직을 만든다.
  4. 타입 코드 값 각각에 대해 서브클래스 생성과 선택 로직 추가를 반복한다.
  5. 타입 코드 필드를 제거한다.
  6. 타입 코드 접근자를 이용하는 메서드 모두에 메서드 내리기(12-4)와 조건부 로직을 다형성으로 바꾸기(10-4)를 적용한다.
*/

/** 직접 상속 할때 */
class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(type) {
    if (!['engineer', 'manager', 'salesperson'].includes(type))
      throw new Error(`${type}라는 직원 유형이 없습니다.`);
  }
  toString() {
    return `${this._name} (${this._type})`;
  }
}

//리팩터링
class EmployeeRefactor {
  constructor(name /*type*/) {
    // this.validateType(type); // 6.추가 검증 로직 삭제
    this._name = name;
    // this._type = type; // 5.타입코드 필드를 제거한다.
  }
  //   validateType(type) { // 6.추가 검증 로직 삭제
  //     if (!['engineer', 'manager', 'salesperson'].includes(type))
  //       throw new Error(`${type}라는 직원 유형이 없습니다.`);
  //   }

  // 1.타입코드 필드를 자가 캡슐화 한다.
  //   get type() { // 5.타입코드 필드 접근자도 제거한다.
  //     return this._type;
  //   }
  toString() {
    return `${this._name} (${this.type})`; // type을 게터 메서드로 변경
  }
}

// 2.타입코드 값 하나를 선택하여 서브클래스 만들기
class Engineer extends EmployeeRefactor {
  // 2.타입코드 게터를 오버라이드 한다.
  get type() {
    return 'engineer';
  }
}
// 4. 타입코드 값 각각에 대해 서브클래스와 선택 로직 추가를 반복한다.
class Salesperson extends EmployeeRefactor {
  get type() {
    return 'salesperson';
  }
}
class Manager extends EmployeeRefactor {
  get type() {
    return 'manager';
  }
}

// 3.생성자를 팩토리로 바꾸어서 선택로직을 담을 장소를 마련한 후 서브클래스를 매핑하는 로직 추가.
function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      return new Engineer(name /*type*/);

    // 4.서브클래스 선택 로직 추가 반복
    case 'salesperson':
      return new Salesperson(name /*type*/);
    case 'manager':
      return new Manager(name /*type*/);
    default:
      throw new Error(`${type}라는 직원 유형이 없습니다.`);
  }
}
