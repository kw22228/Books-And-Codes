/*
    함수 인라인하기 <-> 함수 추출하기

    [배경]
    본문 코드가 함수명만큼이나 명확하거나 간접 호출이 과하게 많을 경우 진행한다.

    [절차]
    1. 서브 클래스에서 오버라이딩된 메서드는 인라인하면 안된다 !!
    2. 인라인할 함수를 호출하는 곳을 모두 찾는다.
    3. 각 호출문을 함수 본문으로 교체한다.
*/

function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}
function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}

/** 인라인 적용 */
// 주의1) 인라인할때 주어진 인수로 맞게 변경해줘야함 dvr -> aDriver
function ratingInline(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

//////////////////////////////////////////////////////////////

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}
function gatherCustomerData(out, aCustomer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}

/** 인라인 적용 */
function reportLinesInline(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}

//////////////////////////////////////////////////////////
function showExistToast() {
  const message = isLastStep(step) ? '저장하고 이탈' : '저장하지 않고 이탈';
  toast(message);
}
function isLastStep(step) {
  return step === '4';
}

/** 인라인 적용 */
function showExistToastInline() {
  const message = step === '4' ? '저장하고 이탈' : '저장하지 않고 이탈';
  toast(message);
}
