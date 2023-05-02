/*
  조건부 로직을 다형성으로 바꾸기

  [배경]
  - 로직을 구조화하여 명확하게 만들 수 있다. 

  [절차]
  1. 다형성 동작을 표현하는 클래스들이 아직 없다면 만들어준다. 적합한 인스턴스를 알아서 만들어 반환하는 팩토리 함수도 함께 만들자.
  2. 호출하는 코드에서 팩토리 함수를 사용하자.
  3. 조건부 로직 함수를 슈퍼클래스로 옮긴다.
  4. 서브클래스에서 슈퍼클래스의 조건부 로직 메서드를 오버라이드한다.
  5. 슈퍼클래스를 추상클래스로 만듬.
*/

function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return '보통';
    case '아프리카 제비':
      return bird.numberOfCoconuts > 2 ? '지침' : '보통';
    case '노르웨이 파랑 앵무':
      return bird.voltage > 100 ? '그을림' : '예쁘다';
    default:
      return '알수 없다.';
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return 35;
    case '아프리카 제비':
      return 40 - 2 * bird.numberOfCoconuts;
    case '노르웨이 파랑 앵무':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

/** 리팩토링 */

// 슈퍼클래스 만들기
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }
  get plumage() {
    return '알수 없다.';
  }
  get airSpeedVelocity() {
    return null;
  }
}

// 서브클래스 만들기
class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통';
  }
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? '지침' : '보통';
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? '그을림' : '예쁘다';
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

// 팩토리 함수
function createBird(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

// function plumageRefactor(bird) {
//   return new createBird(bird).plumage;
// }
// function airSpeedVelocityRefactor(bird) {
//   return new createBird(bird).airSpeedVelocity;
// }

function plumagesRefactor(birds) {
  return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]));
}

function speedsRefactor(birds) {
  return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.airSpeedVelocity]));
}

/////////////////////////// 변형 동작을 다형성으로 표현하기 ////////////////////////////
function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);

  if (vpf * 3 > vr + chr * 2) return 'A';
  else return 'B';
}
function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) result += 2;
  if (voyage.length > 8) result += voyage.length - 8;
  if (['중국', '동인도'].includes(voyage.zone)) result += 4;

  return Math.max(result, 0);
}
function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;

  if (voyage.zone === '중국' && hasChina(history)) result -= 2;
  return Math.max(result, 0);
}
function hasChina(history) {
  return history.som((v) => '중국' === v.zone);
}
function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === '중국') result += 1;
  if (voyage.zone === '동인도') result += 1;
  if (voyage.zone === '중국' && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
}

const voyage = {
  zone: '서인도',
  length: 10,
};
const history = [
  { zone: '동인도', profit: 5 },
  { zone: '서인도', profit: 15 },
  { zone: '중국', profit: -2 },
  { zone: '서아프리카', profit: 7 },
];
const myRating = rating(voyage, history);

/** 리팩터링 */

// 기본동작을 할 클래스
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr * 2) return 'A';
    else return 'B';
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (['중국', '동인도'].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === '중국') result += 1;
    if (this.voyage.zone === '동인도') result += 1;
    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;
    return result;
  }

  get voyageLengthFactor() {
    return this.voyage.length > 14 ? -1 : 0;
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }
}

// 서브클래스 만들기
class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }
}

// 팩토리 함수
function createRating(voyage, history) {
  if (voyage.zone === '중국' && history.some((v) => '중국' === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else return new Rating(voyage, history);
}

function ratingRefactor(voyage, history) {
  return createRating(voyage, history).value;
}
