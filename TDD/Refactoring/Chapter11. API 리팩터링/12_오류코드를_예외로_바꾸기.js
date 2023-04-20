/*
  오류 코드를 예외로 바꾸기

  [배경]
  - 예외를 사용하면 오류코드를 일일이 검사하거나 오류를 식별해 콜스택 위로 던지는 일을 신경쓰지 않아도 된다.
  - 예외를 던지는 코드를 프로그램 종료 코드로 바꾼후 정상동작 하지 않으면 예외를 하지 말라는 신호다.
    예외 대신에 오류를 검출하여 프로그램을 정상 흐름으로 되돌리게끔 처리하자 !

  [절차]
  1. 콜스택 상위에 해당 예외를 처리할 예외 핸들러를 작성한다.
    - 처음에는 모든 예외를 다시 던지게 해주자.
    - 적절한 처리를 해주는 핸들러가 이미 있다면 지금이 콜스택도 처리할 수 있도록 확장하자.
  2. 해당 오류 코드를 대체할 예외와 그 밖의 예외를 구분할 식별 방법을 찾는다. (서브 클래스 사용)
  3. catch절을 수정하여 직접 처리할 수 있는 예외는 적절히 대처하고 그렇지 않은 예외는 다시 던진다.
  4. 오류 코드를 반환하는 곳 모두에서 예외를 던지도록 수정한다.
  5. 모두 수정했다면 그 오류 코드를 콜스택 위로 전달하는 코드를 모두 제거한다.
*/

function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else return -23;
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules; //오류 전파
}

const status = calculateShippingCosts(orderData);
if (status < 0) errorList.push({ order: orderData, errorCode: status });

/** 리팩토링 */

// 2. 다른 예외와 구별하기 위해 클래스 추가 (서브 클래스)
class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return 'OrderProcessingError';
  }
}

function localShippingRulesRefactor(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23); // 4. 오류 코드를 반환하는 곳 모두에서 예외 클래스를 던지도록 한다.
}

function calculateShippingCostsRefactor(anOrder) {
  const shippingRules = localShippingRulesRefactor(anOrder.country);
  //5. 콜스택 위로 전달하는 코드 전부 제거

  // something Code...
}

// 1. 최상위에 예외 핸들러를 작성한다.
try {
  calculateShippingCosts(orderData);
} catch (e) {
  // 3. catch절에 오류를 서브 클래스로 처리하는 로직 추가.
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: statusRefactor });
  } else {
    throw e;
  }
}
