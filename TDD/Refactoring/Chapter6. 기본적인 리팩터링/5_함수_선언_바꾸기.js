/*
  함수 선언 바꾸기

  [배경]
  - 이름이 잘못된 함수를 발견하면 즉시 수정하자. (주석이 좋은 이름을 짓는데 도움이 된다.)
  - 마이그레이션 절차의 복잡도에 따라 간단한 절차와 마이그레이션 절차로 구분지어짐.

  [간단한 절차]
  1. 매개변수 제거 시, 이 매개변수를 참조하는 곳이 있는지 확인한다.
  2. 메서드 선언을 바꿔준다.

  [마이그레이션 절차]
  1. 함수 본문을 새 함수로 추출하자.
  2. 추출한 함수에 매개변수를 추가해야 한다면 '간단한 절차'를 따라서 추가한다.
  3. 기존 함수를 인라인한다.
  4. 이름을 임시로 붙여뒀다면 함수 선언 바꾸기를 한번더 적용하여 원래 이름으로 되돌린다.
*/

/** 함수 이름 바꾸기(간단한 절차) */
function circum(radius) {
  return 2 * Math.PI * radius;
}

//함수 이름 바꾸기
function circumference(radius) {
  return 2 * Math.PI * radius;
}

///////////////////////////////////

/** 함수 이름 바꾸기(마이그레이션 절차) */
function circumMigration(radius) {
  return circumference(radius); // 새 함수를 인라인
}

////////////////////////////////////
/** 매개변수 추가하기 */
class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  // 본문을 새함수로 추출
  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false); //새 매개변수를 빠뜨린 부분을 찾을 수 있음.
    this._reservations.push(customer, isPriority);
  }
}

//////////////////////////////////////////////////////////////
function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(aCustomer.address.state);
}
const newEnglanders = someCustomers.filter(c => inNewEngland(c));

/** 리팩터링 */
function inNewEnglandRefactor(stateCode) {
  return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(stateCode);
}

const newEnglandersRefactore = someCustomers.filter(c => inNewEnglandRefactor(c.adress.state));
