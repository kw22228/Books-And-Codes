import createStatementData from './createStatementData';
import usd from './utils/usd';

function statement(invoice, plays) {
  /** 첫 단계의 필요한 데이터 처리하기 */
  /** 두 번째 단계의 처리결과를 텍스트나 HTML로 추출 */
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    //청구 내역 출력
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;

  return result;
}

export default statement;
