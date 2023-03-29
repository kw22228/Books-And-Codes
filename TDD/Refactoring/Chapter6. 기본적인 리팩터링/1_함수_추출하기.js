/*
    함수 추출하기 <-> 함수 인라인하기

    [배경]
    언제 독립된 함수로 묶어야할까?
    1. 길이를 기준으로 삼는다.
    2. 재사용성을 기준으로 삼는다.
    3. 목적과 구현을 분리 하는 방식으로 한다. (가장 합리적)

    [절차]
    1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙인다('어떻게'가 아닌 '무엇을' 하는지가 드러나야 함.)
    2. 추출할 코드를 원본 함수에서 복사하여 새 함수에 붙여넣는다.
    3. 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사한다. (있다면 매개변수로 전달한다.)
      - 새 함수에서만 사용되는 변수는 지역변수로 변경한다.
      - 지역변수의 값을 변경할 경우, 새 함수의 결과로 전달. (인라인으로 지역변수로 재할당하라는 말 같음.)
    4. 함수 추출한 코드들을 함수 호출문(인라인)으로 변경한다.
 */

function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  function printBanner() {
    console.log('********************');
    console.log('***** 고객 채무 *****');
    console.log('********************');
  }
  function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
  }
  function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }
  function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
  }
}

async function checkValidation(encryptParam) {
  const { validationCode } = await checkValidation({ encryptParam });
  handleValid(VALID_CODE[validationCode]);

  function handleValid(validCode) {
    if (validCode === 'error') {
      goMain();
    } else if (validCode === 'expired') {
      toast('만료되었습니다');
    } else if (validCode === 'different') {
      toast('명의가 일치하지 않습니다.');
    }
  }
}
