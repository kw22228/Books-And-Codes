/*
  필드 옮기기

  [배경]
  - 필드를 한 곳에서 다른 곳으로 이동
  - 언제 해줘야 할까?
    - 함수에 어떤 레코드를 넘길 때 마다 또 다른 레코드의 필드도 함께 넘기고 있을때
    - 한 레코드를 변경하는데 다른 레코드의 필드까지 변경해야 할 때
    - 구조체 여러 개에 정의된 똑같은 필드들을 갱신해야 할 때

  [절차]
  1. 소스 필드를 캡슐화 해주자.
  2. 타깃 객체에 필드를 생성한다.
  3. 소스 객체에서 타깃 객체를 참조할 수 있는지 확인한다. (기존 필드나 메서드 중 타깃 객체를 넘겨주는게 있을지 모른다.)
  4. 접근자들이 타깃 필드를 사용하도록 수정한다.
  5. 소스 필드를 제거한다.
*/

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    // return this._discountRate;
    return this._contract.discountRate;
  }
  // 캡슐화를 진행한다. (public 세터를 만들기 싫어서 메서드를 이용함.)
  _setDiscountRate(aNumber) {
    // this._discountRate = aNumber;
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._discountRate += 0.03;
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

/** 공유 객체로 이동하기 */
class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
