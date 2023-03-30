/*
    여러 함수를 변환 함수로 묶기 
      - 이 리팩터링 대신 "여러 함수를 클래스로 묶기(6-9)를 해도된다."

    [배경]
    - 특정 데이터를 받아서 어떤 값을 도출해내는 여러 함수를 하나의 함수로 만들어서 한번만 호출하도록 만들기.

    [절차]
    1. 데이터를 입력 받아서 깊은 복사를 수행하는 함수를 만든다.
    2. 여러 함수중 하나를 깊은 복사를 수행하는 함수로 옮기고 기존의 return문 대신 복사된 새 데이터의 속성으로 기록한다.
    3. 클라이언트도 기존 함수가 return하는 값을 사용하는 대신 속성을 사용하도록 수정한다.
*/

function acquireReading() {
  return {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  };
}
const aReading = acquireReading();

/** 클라이언트 1 */
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

/** 클라이언트 2 */
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

/** 클라이언트 3 */
const basicChargeAmount = calculateBaseCharge(aReading);
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

///////////////////////////////////////////////////////
/** 객체를 복사해 변환하는 함수 만들기 */
function enrichReading(original) {
  const result = _.cloneDeep(original); //깊은 복사
  result.baseCharge = calculateBaseCharge(result); // 부가 정보 덪붙힘
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));

  return result;
}

/** 클라이언트 3 리팩터링 */
const aReadingRefactor = enrichReading(acquireReading());
const baseChargeAmountRefactor = aReadingRefactor.baseCharge;

/** 클라이언트 1 리팩터링 */
const baseChargeRefactor = aReadingRefactor.baseCharge;

/** 클라이언트 2 리팩터링 */
const taxableChargeRefactor = aReadingRefactor.taxableCharge;
