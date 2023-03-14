import amountFor from './amountFor';
import usd from './usd'; // format이라고 하기에는 너무 명확하지 못하기 때문에 usd로 바꿈.
import playFor from './playFor';
import volumeCreditsFor from './volumeCreditsFor';

/**
 * 공연료 청구서를 출력하는 함수
 *
 * - 리팩토링 내용
 * 1. switch-case문 함수추출 -> amountFor(perf) 임시변수 인라인
 * 2. play -> playFor(perf) 임시변수 인라인하기
 */
function statement(invoice, plays) {
  let totalAmount = 0; //총액
  let volumeCredits = 0; //포인트
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    //청구 내역 출력
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf);
  }

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result;
}

export default statement;
