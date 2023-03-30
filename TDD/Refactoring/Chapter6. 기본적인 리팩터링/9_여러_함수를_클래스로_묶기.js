/*
    여러 함수를 클래스로 묶기

    [배경]
    - 특정한 데이터에 대한 여러 함수 뭉치가 있을 때 해당 데이터와 함수를 하나의 클래스로 묶자.

    [절차]
    1. 데이터 레코드를 캡슐화 하자.
    2. 같은 데이터 레코드를 사용하는 함수를 클래스 메소드로 옮기자.
    3. 데이터를 조작하는 로직들을 함수 추출하기로 클래스의 메소드로 옮긴다.
*/

/** 데이터 레코드 */
function acquireReading() {
  return {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  };
}
const aReading = acquireReading();

/** 클라이언트1 */
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

/** 클라이언트2 */
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

/** 클라이언트3 */
const basicChargeAmount = calculateBaseCharge(aReading);
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year);
}

/////////////////////////////////////////////////////////////////////////////////
/** 클래스로 묶기. */
class Reading {
  constructor({ customer, quantity, month, year }) {
    this._customer = customer;
    this._quantity = quantity;
    this._month = month;
    this._year = year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

/** 함수 리팩터링 */
const aReadingRefactor = new Reading(acquireReading());
const basicChargeAmountRefactor = aReadingRefactor.baseCharge;

/** 클라이언트1 리팩터링 */
const baseChargeRefactor = aReadingRefactor.baseCharge;

/** 클라이언트2 리팩터링 */
const taxableChargeRefactor = aReading.taxableCharge;
