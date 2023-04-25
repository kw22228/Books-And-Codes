/*
  메서드 올리기 <-> 메서드 내리기

  [배경]
  - 메서드들의 본문 코드가 같을때, 이 메서드를 뽑아 슈퍼 클래스로 옮기자.
  - 두 메서드의 전체 흐름은 비슷하지만 세부 내용이 다르다면 "템플릿 메서드 만들기"를 고려해보자.

  [절차]
  1. 똑같이 동작하는 메서드 인지 면밀히 살펴보자. (중복 메소드)
  2. 메서드 안에서 호출하는 다른 메서드와 참조하는 필드들을 슈퍼클래스에서도 호출하고 참조할 수 있는지 확인한다.
  3. 메서드 시그니처가 다르다면 함수 선언 바꾸기로 슈퍼클래스에서 사용하고 싶은 형태로 통일한다.
  4. 슈퍼클래스에 새로운 메서드를 생성하고, 대상 메서드의 코드를 복사해 넣는다.
  5. 서브클래스 중 하나의 메서드를 제거한다.
  6. 모든 서브클래스의 메서드가 없어질 때까지 다른 서브클래스의 메서드를 하나씩 제거한다.
*/
class Party {}
class Employee extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}
class Department extends Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}

/** 리팩터링 */
class PartyRefactor {
  // 4. 타겟 메서드를 복사해 넣는다.
  get annualCost() {
    return this.monthlyCost * 12;
  }
}
class EmployeeRefactor extends PartyRefactor {
  // 1. 똑같이 동작하는 메서드 발견.
  //   get annualCost() { // 5. 서브 클래스 중 하나 메서드 제거
  //     return this.monthlyCost * 12;
  //   }
}
class DepartmentRefactor extends PartyRefactor {
  // 1. 똑같이 동작하는 메서드 발견.
  //   get totalAnnualCost() { // 2. 슈퍼클래스에서 사용할 메서드 시그니처를 통일해준다. , 3. 함수 선언 바꾸기로 이름을 통일해준다.
  //   get annualCost() { // 6. 모든 서브 클래스 메서드 제거
  //     return this.monthlyCost * 12;
  //   }
}
