/*
  참조를 값으로 바꾸기 <-> 값을 참조로 바꾸기

  [배경]
  객체, 데이터의 불변성을 적용하면 사이드이펙트를 최소화 할 수 있다.
  다만 상황에 따라 가변객체를 사용하는 경우가 있으니 조심하자.

  [절차]
  1. 후보 클래스가 불변인지, 불변이 될 수 있는지 확인한다.
  2. 각각의 setter를 하나씩 제거한다.
  3. 이 값 객체의 필드들을 사용하는 동치성 비교 메서드(equals)를 만든다.
*/

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }
  set number(arg) {
    this._number = arg;
  }
}

/** 리팩터링 */

class PersonRefactor {
  constructor(areaCode, number) {
    this._telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeAreaCode(arg) {
    // this._telephoneNumber.areaCode = arg;
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber); // 새로운 인스턴스로 할당
  }
  set officeNumber(arg) {
    // this._telephoneNumber.number = arg;
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg); // 새로운 인스턴로 할당
  }
}

class TelephoneNumberRefactor {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }

  /** 불변성을 위해 setter를 제거한다. (생성자에서 할당해줌) */
  //   set areaCode(arg) {
  //     this._areaCode = arg;
  //   }
  //   set number(arg) {
  //     this._number = arg;
  //   }

  /** 동치성 비교 메서드 작성 */
  equals(other) {
    if (!(other instanceof TelephoneNumberRefactor)) return false;

    return this.areaCode === other.areaCode && this.number === other.number;
  }
}
