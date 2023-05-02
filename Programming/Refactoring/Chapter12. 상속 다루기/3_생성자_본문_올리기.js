/*
  생성자 본문 올리기

  [배경]
  - 서브 클래스들에서 기능이 같은 메서드들을 발견하면 "함수 추출하기" 와 메서드 올리기(12-1)를 적용하여 슈퍼클래스로 옮기자.
  - 리팩터링이 간단히 끝날 것 같지 않다면 생성자를 팩터리 함수로 바꾸기(11-8)을 고려해보자.

  [절차]
  1. 슈퍼클래스에 생성자가 없다면 하나 정의한다. 서브클래스의 생성자들에서 이 생성자가 호출되는지 확인하자.
  2. 문장 슬라이드하기 로 공통 문장 모두를 super() 호출 직후로 옮긴다.
  3. 공통 코드를 슈퍼클래스에 추가하고 서브클래스들에서는 제거한다. 
    생성자 매개변수 중 공통 코드에서 참조하는 값들을 모두 super로 건넨다.
  4. 생성자 시작 부분으로 옮길 수 없는 공통 코드에는 함수 추출하기와 메서드 올리기 를 차례로 적용한다.
*/

class Party {}
class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
}
class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
}

/** 리팩터링 */
class PartyRefactor {
  constructor(name) {
    this._name = name; // 3.공통 코드를 슈퍼클래스에 추가
  }
}
class EmployeeRefactor extends PartyRefactor {
  constructor(name, id, monthlyCost) {
    // 3. 코드 제거 후 슈퍼클래스 매개변수로 추가
    super(name);
    // this._name = name; // 2.super()호출 바로 아래로 문장 슬라이드한다.

    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}
class DepartmentRefactor extends PartyRefactor {
  constructor(name, staff) {
    // 3. 코드 제거 후 슈퍼클래스 매개변수로 추가
    super(name);
    // this._name = name;
    this._staff = staff;
  }
}
