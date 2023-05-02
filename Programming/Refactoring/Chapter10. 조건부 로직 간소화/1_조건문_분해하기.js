/*
  조건문 분해하기

  [배경]
  - 코드를 읽는 사람이 이해하기 쉽게 복잡한 조건문의 로직을 함수로 분리한다.
  - 거대한 조건문 블록에서 부위별로 분해한 다음, 해체된 코드 덩어리들을 각 덩어리의 의도를 살린 이름의 함수 호출로 변경한다.

  [절차]
  1. 조건식과 그 조건식에 딸린 조건절 각각을 함수로 추출하자.
*/

if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

/** 리팩터링 */
if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}

// 3항식
charge = summer() ? summerCharge() : regularCharge();

// 조건식을 함수로 추출.
function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

//조건절 함수로 추출
function summerCharge() {
  quantity * plan.summerRate;
}
function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}
