function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  //세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
}

function printOwingRefactor(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  //추출 함수
  function printDetails(outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
  }
}

/*
    언제 독립된 함수로 묶어야할까?
    1. 길이를 기준으로 삼는다.
    2. 재사용성을 기준으로 삼는다.
    3. 목적과 구현을 분리 하는 방식으로 한다. (가장 합리적)
 */
