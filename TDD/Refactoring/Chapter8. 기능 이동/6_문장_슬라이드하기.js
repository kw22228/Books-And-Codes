/*
  문장 슬라이드 하기

  [배경]
  - 관련있는 코드가 흩어져 있을 때 한 곳으로 뭉쳐주자.

  [절차]
  1. 코드 조각을 이동할 목표위치를 찾는다.
     코드 조각의 원래 위치와 목표 위치 사이의 코드를 훑어보면서, 조각을 모으고 나면 동작이 달라지는 코드가 있는지 살피자.
     그런 동작이 있다면 리팩터링을 포기한다.
  2. 코드 조각을 원래 위치에서 잘라내어 목표 위치에 붙여 넣는다.
  3. 테스트한다.
*/

const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
const chargePerUnit = pricingPlan.unit;
const units = order.units;
const baseCharge = pricingPlan.base;

let charge;
charge = baseCharge + units * chargePerUnit;

let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
let discount;
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);
