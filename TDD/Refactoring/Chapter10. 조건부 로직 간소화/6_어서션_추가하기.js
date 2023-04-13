/*
  어서션 추가하기

  [배경]
  - 항상 참이라고 가정하는 조건부 문장
  - 오류 찾기에 활용 가능
  - 특정 로직이 실행 될 때 필요한 프리컨디션을 나타냄

  [절차]
  1. 참이라고 가정하는 조건이 보이면 그 조건을 명시하는 어서션을 추가한다.
*/

class Customer {
  get discountRate() {
    return this.discountRate;
  }
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0); // 세터에 지정해주므로서 미리 양수만을 받아들임
    this._discountRate = aNumber;
  }

  applyDiscount(aNumber) {
    // return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;

    //3항 연산자를 if...else 로 수정
    if (!this.discountRate) return aNumber;
    else {
      assert(this.discountRate > 0); // 어서션을 추가하여 무조건 양수라는걸 가정해준다.
      return aNumber - this.discountRate * aNumber;
    }
  }
}
