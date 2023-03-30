/*
    매개변수 객체 만들기

    [배경]
    - 데이터 뭉치를 데이터 구조로 묶자.
    - 이 데이터 구조가 문제 영역을 간결하게 나타내는 추상 영역으로 간주되어 코드의 개념적인 그림을 다시 설계 할 수 있다.

    [절차]
    1. 데이터 구조를 만들자. (클래스로 만드는걸 선호)
    2. 함수 선언 바꾸기로 새 데이터 구조를 매개변수로 추가한다. (파라미터로 값객체를 받음)
    3. 함수 호출 시 새 데이터 구조를 인자로 넘기도록 수정한다. (아규먼트로 값객체를 넘김)
    4. 기존 매개변수를 제거하고 테스트하자.
*/

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const operationPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 55,
};

function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}
const alerts = readingsOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

//////////////////// 리팩터링 //////////////////////////

/** 1. 데이터 구조 추가 */
class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }

  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

/** 2. 값객체를 매개변수로 추가 후 그에 따른 수정*/
function readingsOutsideRangeRefactor(station, range) {
  //   return station.readings.filter((r) => r.temp < range.min || r.temp > range.max);
  return station.readings.filter((r) => !range.contains(r.temp));
}
const range = new NumberRange(operationPlan.temperatureFloor, operationPlan.temperatureCeiling);
const alertsRefactor = readingsOutsideRangeRefactor(station, range);
