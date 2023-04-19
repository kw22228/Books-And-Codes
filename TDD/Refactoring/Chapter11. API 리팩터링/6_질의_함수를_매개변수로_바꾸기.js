/*
  (조금 어렵)
  질의 함수를 매개변수로 바꾸기 <-> 매개변수를 질의 함수로 바꾸기

  [배경]
  - 순수함수가 아닌 함수는 호출자로 책임이 옮겨지더라도 매개변수로 바꿔 참조 투명성으로 만든다.

  [절차]
  1. 변수 추출하기로 질의 코드를 함수 본문의 나머지 코드와 분리한다.
  2. 함수 본문 중 해당 질의를 호출하지 않는 코드들을 별도 함수로 추출한다. (이 함수의 이름은 임시 함수명으로 지어준다)
  3. 방금 만든 변수를 인라인하여 제거한다.
  4. 원래 함수도 인라인 한다.
  5. 새 함수의 이름을 원래 함수의 이름으로 바꿔준다.
*/

class HeatingPlan {
  constructor() {}

  get targetTemperature() {
    if (thermostat.selectedTemplerature > this._max) return this._max;
    else if (thermostat.selectedTemplerature < this._min) return this._min;
    else return thermostat.selectedTemplerature;
  }
}

const thePlan = new HeatingPlan();
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();

/** 리팩터링 */
class HeatingPlanRefactor {
  constructor() {}

  //   get targetTemperature() {
  //     // 1. 변수 추출하기를 이용하여 매개변수를 준비해준다.
  //     // const selectedTemplerature = thermostat.selectedTemplerature;

  //     // if (selectedTemplerature > this._max) return this._max;
  //     // else if (selectedTemplerature < this._min) return this._min;
  //     // else return selectedTemplerature;

  //     // 3. 1번에서 추출한 변수를 인라인 해준다.
  //     return this.xxNEWtargetTemperature(thermostat.selectedTemplerature);
  //   }

  // 2. 질의를 뺀 별도의 새 함수를 만들어준다.
  //   xxNEWtargetTemperature(selectedTemplerature) {
  // 5. 원래 함수이름으로 바꿔준다.
  targetTemperature(selectedTemplerature) {
    if (selectedTemplerature > this._max) return this._max;
    else if (selectedTemplerature < this._min) return this._min;
    else return selectedTemplerature;
  }
}

const thePlanRefactor = new HeatingPlanRefactor();

/** 4. 쓰던 메소드도 인라인 해준다. */
if (
  thePlanRefactor.targetTemperature(thermostat.selectedTemplerature) > thermostat.currentTemperature
)
  setToHeat();
else if (
  thePlanRefactor.targetTemperature(thermostat.selectedTemplerature) < thermostat.currentTemperature
)
  setToCool();
else setOff();
