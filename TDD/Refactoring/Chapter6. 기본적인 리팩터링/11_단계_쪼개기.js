/*
    단계 쪼개기

    [배경]
    - 지나치게 인라인 된 로직을 논리적인 단위의 함수로 쪼갠다.
      관심사를 분리하기 때문에 함수간에 서로 무슨일을 하는지 알 필요가 없다.

    [절차]
    1. 논리적인 단위로 기존 로직을 분석한다.
    2. 로직을 분석하여 독립 함수로 추출하고 테스트한다.
    3. 중간 데이터 구조를 작성하여 독립 함수의 파라미터로 추가한다.
*/

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) * product.basePrice + product.discountRate;

  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}

////////////////// 리팩터링 //////////////////

/** 1. 코드를 2단계로 나누기 */
// 상품가격에 대한 함수
function priceOrderRefactor(product, quantity, shippingMethod) {
  /** 2. 중간 데이터 구조 생성 (price에 대한) */
  //   const priceData = { basePrice, quantity, discount };
  const priceData = calculatePriceingData(product, quantity); // 독립함수 호출로 중간데이터 생성

  /** 3. 매개변수 수정 (중간 데이터로) */
  return applyShipping(priceData, shippingMethod);
}

/** 4. 첫 번째 단계(상품 가격) 로직 추출 */
function calculatePriceingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) * product.basePrice + product.discountRate;

  return { basePrice, discount, quantity };
}

// 배송비에 대한 함수 (두 번째 단계(배송비) 로직 추출)
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;

  return priceData.basePrice - priceData.discount + shippingCost;
}
