/*
  파생 변수를 질의 함수로 바꾸기

  [배경]
  가변 데이터의 유효범위를 확실하게 정하여 사이드이펙트를 방지하자.
  가변 데이터의 값을 계산해주는 함수를 만드는 방법을 적용해보자.

  [절차]
  1. 변수 값이 갱신되는 지점을 모두 찾는다. 필요하면 변수 쪼개기를 함.
  2. 해당 변수의 값을 계산해주는 함수를 만든다.
  3. 해당 변수가 사용되는 모든 곳에 어서션을 추가한다. (assert를 추가하여 테스트해본다는거 같음.)
  4. 테스트한다.
  5. 변수를 읽는 코드를 모두 함수 호출로 대체한다.
  6. 테스트한다.
  7. 변수를 선언하고 갱신하는 코드를 제거한다.
*/

class ProductionPlan {
  constructor() {}

  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._addjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

/** 리팩터링 */
class ProductionPlanRefactor {
  constructor() {}

  get production() {
    /** 어서션 테스트후 calculateProduction 코드를 옮기자. */
    // assert(this._production === this.calculateProduction); // 어서션 추가
    // return this._production;

    return this._addjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  /** 어서션 체크후 production으로 코드 옮김 */
  //   get calculateProduction() {
  //     return this._addjustments.reduce((sum, a) => sum + a.amount, 0);
  //   }

  applyAdjustment(anAdjustment) {
    this._addjustments.push(anAdjustment);
  }
}
