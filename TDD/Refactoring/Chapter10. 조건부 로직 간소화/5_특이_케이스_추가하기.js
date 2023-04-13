/*
  특이 케이스 추가하기 (너무 어렵다.......)

  [배경]
  - 특수한 경우의 공통 동작을 한곳에 모으자.
  - 리팩터링 과정에서 모드를 일괄적으로 바꿔야 한다면, 해당 함수에 에러처리 구문을 넣어 실수가 있는지 확인하자.
  - 특이 케이스의 경우라면 특이 케이스 객체를 반환하여 기본값 처리를 하자.
  - 데이터 구조를 변환하는 함수
    - enrich: 부가 정보추가
    - transform: 형태를 바꾸는 경우
  - 특수한 경우의 공통 동작을 한곳에 모으자.

  [절차]
  1. 컨테이너에 특이 케이스인지를 검사하는 속성을 추가하고, false를 반환하게 한다.
  2. 특이 케이스 객체를 만든다. 이 객체는 특이케이스인지를 검사하는 속성만 포함하며, true를 반환하게 한다.
  3. 클라이언트에서 특이 케이스인지를 검사하는 코드를 함수로 추출한다.
  4. 코드에 새로운 특이 케이스 대상을 추가한다.
  5. 특이 케이스를 검사하는 함수 본문을 수정하여 특이 케이스 객체의 속성을 사용하도록 한다.
  6. 테스트 한다.
  7. 여러 함수를 클래스로 묶기나 여러 함수를 변환 함수로 묶기를 적용하여 특이 케이스를 처리하는 공통 동작을 새로운 요소로 옮긴다.
*/

class Site {
  get customer() {
    return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer;
  }
}
class Customer {
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}

  // 미확인 고객인지 체크
  get isUnknown() {
    return false;
  }
}

// 클라이언트 1
const aCustomer = site.customer;
let customerName;
if (aCustomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer === '미확인 고객' ? registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
if (aCustomer !== '미확인 고객') aCustomer.billingPlan = newPlan;

// 클라이언트 4
const weeksDelinquent =
  aCustomer === '미확인 고객' ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

/** 리팩터링 */
class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return '거주자';
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  }

  return arg.isUnknown;
}

//클라이언트 1
let customerNameRefactor;
if (isUnknown(aCustomer)) customerNameRefactor = '거주자';
else customerNameRefactor = aCustomer.name;

//클라이언트 2
const planRefactor = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;

//클라이언트 3
if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

//클라이언트 4
const weeksDelinquentRefactor = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
