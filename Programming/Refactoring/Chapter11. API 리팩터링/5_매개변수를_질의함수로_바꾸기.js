/*
  매개변수를 질의 함수로 바꾸기 <-> 질의 함수를 매개변수로 바꾸기

  [절차]
  1. 필요하다면 대상 매개변수의 값을 계산하는 코드를 별도 함수로 추출하자.
  2. 함수 본문에서 대상 매개변수로의 참조를 모두 찾아 그 매개변수의 값을 만들어주는 표현식을 참조하도록 하자.
  3. 함수 선언 바꾸기로 대상 매개변수를 없앤다.
*/

class Order {
  constructor() {}

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    let discountLevel;
    if (this.quantity > 100) discountLevel = 2;
    else discountLevel = 1;

    return this.discountedPrice(basePrice, discountLevel);
  }

  discountedPrice(basePrice, discountLevel) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}

/** 리팩터링 */
class OrderRefactor {
  constructor() {}

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;

    /** 메소드로 추출 */
    // let discountLevel;
    // if (this.quantity > 100) discountLevel = 2;
    // else discountLevel = 1;

    // return this.discountedPrice(basePrice, this.discountLevel);
    return this.discountedPrice(basePrice); // 3. 대상 매개변수를 없애자.
  }

  // 1. 매개변수의 값을 계산하는 코드를 함수로 추출
  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  //   discountedPrice(basePrice, discountLevel) {
  // 2. 매개변수의 값을 만들어주는 표현식으로 참조 변경
  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}
