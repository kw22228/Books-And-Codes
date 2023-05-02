/*
  임시변수를 질의함수로 바꾸기

  [배경]
  - 비즈니스 로직에 있는 계산된 임시 변수를 제거하자.
  - 계산된 임시 변수는 함수로 캡슐화 하자.

  [절차]
  1. 순수함수인지 확인한다.
  2. 읽기전용으로 만들 수 있는 변수는 읽기전용으로 만든다. (var, let => const로 변경)
  3. 변수 대입문을 함수 호출문으로 인라인한다.
*/

class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    // const basePrice = this._quantity * this._item.price; // basePrice Getter로 인해 삭제후 인라인 대체

    /** discountFactor Getter로 삭제후 인라인 대체 */
    // let discountFactor = 0.98;
    // if (this.basePrice > 1000) discountFactor -= 0.03;

    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }
  get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
}
