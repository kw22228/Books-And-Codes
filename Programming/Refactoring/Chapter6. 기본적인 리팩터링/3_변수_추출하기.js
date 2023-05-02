/*
    변수 추출하기 <-> 변수 인라인하기

    [배경]
    - 복잡한 로직을 구성하는 단계마다 변수로 이름 붙이자.
    - 디버깅 시 break point 설정이 용이하다.
    - 문맥을 고려하여 현재 선언된 함수보다 더 넓은 문맥에서까지 의미가 된다면 함수로 추출하는게 좋다.

    [절차]
    1. 추출하려는 표현식에 사이드이펙트가 없는지 확인하자.
    2. 상수를 하나 선언 한 후 표현식을 대입하자.
    3. 원본 변수를 새로만든 변수로 교체하자.
*/

function price(order) {
  // 가격(price) = 기본가격 - 수량 할인 + 배송비
  return (
    basePrice -
    Math.max(0, order.quantity - 500) +
    order.itemPrice * 0.05 +
    Math.min(basePrice * 0.1, 100)
  );
}

/** 변수 추출하기 */
function priceExtractVariable() {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) + order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shipping;
}

///////////////////////////////////////////////////////////

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }

  get basePrice() {
    return this.basePrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.basePrice * 0.1, 100);
  }
}
