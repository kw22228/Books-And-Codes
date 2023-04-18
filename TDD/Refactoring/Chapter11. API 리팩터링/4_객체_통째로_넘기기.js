/*
  객체 통째로 넘기기

  [배경]
  - 하나의 레코드에서 값 두어개를 가져와 인수로 넘기는것 대신 그 레코드를 통째로 넘기자.
  - 함수가 레코드 자체에 의존하지 않기를 원하면 이 리팩토링은 하지말자.
    특히 레코드와 함수가 서로 다른 모듈에 속한 상황이라면 더욱 그렇다.
  - 다른 객체를 호출하면서 호출하는 객체 자신이 가지고있는 여러개 데이터를 넘길때는 그냥 자기자신(this)를 넘기자.

  [절차]
  1. 매개변수들을 원하는 형태로 받는 빈 함수를 받는다. (일단 임시 함수명을 짓고 나중에 변경해주자)
  2. 새 함수의 본문에서는 원래 함수를 호출하도록 하며, 새 매개변수와 원래 함수의 매개변수를 매핑하자.
  3. 모든 호출자가 새 함수를 사용하게 수정하자.
  4. 원래 함수를 새 함수에 인라인하자.
  5. 새 함수 이름을 적절하게 수정하고 호출자에 반영하자.
*/

class HeatingPlan {
  constructor() {}
  withinRange(bottom, top) {
    return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
  }
}

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!new HeatingPlan.withinRange(low, high)) {
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

/** 리팩터링 */
class HeatingPlanRefactor {
  constructor() {}

  //   withinRange(bottom, top) {
  //     return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
  //   }

  // 1. 매개변수들을 원하는 형태로 받는 함수 생성 (임시 함수명)
  //   xxNEWwithinRange(aNumberRange) {
  // 5. 새 함수 이름을 적절하게 수정
  withinRange(aNumberRange) {
    // return this.withinRange(aNumberRange.low, aNumberRange.high); // 2. 원래 함수를 호출하고 매개변수를 매핑.

    // 4. 원래 함수를 인라인 해준다.
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}

// 3. 호출자가 새 함수를 사용하게 수정 (아규먼트도 적절하게 수정)
if (!new HeatingPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}
