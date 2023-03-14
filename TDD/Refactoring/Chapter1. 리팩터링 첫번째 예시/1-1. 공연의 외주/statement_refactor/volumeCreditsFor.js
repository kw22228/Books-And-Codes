import playFor from './playFor';

/**
 * 적립포인트 추출 함수
 *
 * - 리팩토링 내용
 * 1. 적절한 매개변수, 변수명 변경 (perf -> aPerformance, volumeCredits -> result)
 */
function volumeCreditsFor(aPerformance) {
  let result = 0;

  result += Math.max(aPerformance.audience - 30, 0);
  if (playFor(aPerformance).type === 'comedy') result += Math.floor(aPerformance.audience / 5);

  return result;
}

export default volumeCreditsFor;
