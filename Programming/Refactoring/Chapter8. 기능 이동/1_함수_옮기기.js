/*
  함수 옮기기(메서드 이동)

  [배경]
  - 함수를 한 곳에서 다른 곳으로 이동한다.
  - 여러가지 형태가 있다.
    1. 중첩함수를 최상위로 이동.
    2. A클래스의 메서드를 B클래스로 이동.
    3. A모듈의 함수를 B모듈로 이동.
  - 언제 해야할까?
    - 함수가 자신이 속한 모듈의 요소들보다 외부 모듈의 요소를 더 많이 참조하면 그쪽으로 옮기는걸 고려하자.
    - 다른 함수 안에서 도우미 역할로 정의된 함수 중 독립적인 가치가 있는 함수일 경우 추출하자.

  [절차]
  1. 선택한 함수가 현재 컨텍스트에서 사용 중인 모든 프로그램 요소를 살펴보자. (다른곳에서 사용하는지, 다른걸 사용하는지)
  2. 선택한 함수가 다형 메서드인지 확인한다. (같은 메서드가 슈퍼클래스나 서브클래스에도 선언되어 있는지 고려해야 함.)
  3. 선택한 함수를 타깃 컨텍스트로 복사한다. (원래의 함수를 소스함수, 복사해서 만든 새로운 함수를 타깃 함수라고함.)
  4. 소스 컨텍스트에서 타깃 함수를 참조한다.
  5. 소스 함수를 타깃 함수의 위임 함수가 되도록 수정한다.
  6. 소스 함수를 인라인 할지 고민한다.
*/

/** 중첩 함수를 최상위로 옮기기 */
function trackSummary(points) {
  const totalTime = calculateTime();
  //   const totalDistance = top_calculateDistance(points); // 타깃 함수를 참조한다. (추후에 인라인할지 고민)
  const pace = totalTime / 60 / totalDistance(points); // 인라인 결정.

  return {
    time: totalTime,
    distance: totalDistance(points),
    pace,
  };

  //   function calculateDistance() {
  //     return top_calculateDistance(points); // 일단 위임함수로 만들고 테스트.
  //   }

  function calculateTime() {}
}

// 최상위 만들고 임시 이름을 지어주자 (필요한 매개변수도 받아주자)
// function top_calculateDistance(points) {
// 함수명을 변경해준다.
function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}
/** disance와 radians는 calculateDistance함수에서만 사용을 하므로 이쪽 컨텍스트로 옮겨주는게 낫다. (두함수 모두 totalDistance에 의존하지 않으니 최상위도 괜찮음)*/
function distance(p1, p2) {
  const EARTH_RADIUS = 3959;
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) +
    Math.cos(radians(p1.lat)) +
    Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 + Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}
function radians(degrees) {
  return (degrees * Math.PI) / 100;
}
/** 중첩 함수를 최상위로 옮기기 */

/** 다른 클래스로 옮기기 */
class Account {
  constructor(type, daysOverdrawn) {
    this._daysOverdrawn = daysOverdrawn;
    this._type = new AccountType(type);
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
  get type() {
    return this._type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;

    return result;
  }
  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn); //위임 메서드
  }
}

// 계좌 종류 클래스
class AccountType {
  constructor({ isPremium }) {
    this.isPremium = isPremium;
  }

  /** Account의 overdraftCharge를 옮김 */
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}
