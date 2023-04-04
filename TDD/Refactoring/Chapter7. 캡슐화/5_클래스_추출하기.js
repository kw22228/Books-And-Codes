/*
  클래스 추출하기 <-> 클래스 인라인하기

  [배경]
  - 클래스의 일부 데이터와 로직을 따로 분리할 수 있다면 클래스로 추출하자.
  - 클래스로 추출하면서 역할을 분리 시킬 수 있다.

  [절차]
  1. 분리될 역할을 담당할 클래스를 새로 만든다.
  2. 원래 클래스의 생성자에서 새로운 클래스의 인스턴스를 필드에 저장하자.
  3. 분리될 역할에 필요한 필드들을 추출한 클래스로 옮기자.
  4. 메서드도 똑같이 옮기자. (호출이 많은 메서드부터 옮기자)
  5. 양쪽 클래스의 인터페이스를 보면서 불필요한 메서드는 제거하고, 이름도 맞게 바꿔주자
*/

class Person {
  constructor({ name, officeAreaCode, officeNumber }) {
    this._name = name;
    this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }

  get officeAreaCode() {
    return this._telephoneNumber.AreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.AreaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.Number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.Number = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
}

/** 전화번호 관련 동작 클래스 추출 */
class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }

  toString() {
    return `(${this.areaCode} ${this.number})`;
  }
}
