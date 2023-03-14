import playFor from './playFor';

// 매개변수 perf -> aPerformance 더 명확한 이름으로 변경
function amountFor(aPerformance) {
  let result = 0; //  thisAmount -> result 더 명확한 이름으로 변경

  //play -> playFor(aPerformance) 임시변수를 질의 함수로 변경후 변수 인라인하기
  switch (playFor(aPerformance).type) {
    case 'tragedy':
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
  }

  return result;
}

export default amountFor;
