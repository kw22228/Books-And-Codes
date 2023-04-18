/*
  플래그 인수 제거하기

  [배경]
  - 플래그 인수를 쓰면 호출할 수 있는 함수는 무엇이며, 어떻게 호출해야 되는지를 이해하기 어려워진다.
    따라서 플래그 인수를 써서 로직을 구분하는것보다 함수를 나눠 명시적인 함수를 제공하는 편이 더 깔끔하다.

  [절차]
  1. 매개변수로 주어질 수 있는 값 각각에 대응하는 명시적 함수들을 생성하자.
  2. 원래 함수를 호출하는 코드를 모두 찾아서 각 리터럴값에 대응되는 명시적 함수를 호출하도록 수정하자.
*/

function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime;
    if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;

    return anOrder.placeOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;
    if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;

    return anOrder.placeOn.plusDays(2 + deliveryTime);
  }
}
aShipment.deliveryDate = deliveryDate(anOrder, true);
aShipment.deliveryDate = deliveryDate(anOrder, false);

/** 리팩터링 (플래그 매개변수 제거하고 명시적인 함수 2개로 나누기) */
function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
  else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;

  return anOrder.placeOn.plusDays(1 + deliveryTime);
}
function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;

  return anOrder.placeOn.plusDays(2 + deliveryTime);
}
aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeliveryDate(anOrder);

/** 만약 플래그 매개변수가 아주 까다로운 형태로 짜여있을때 (if-else가 난무하는.) => 래핑함수를 만들어서 제공한다.*/
function rushDeliveryDate2(anOrder) {
  return deliveryDate(anOrder, true);
}
function regularDeliveryDate2(anOrder) {
  return deliveryDate(anOrder, false);
}
