import plays from '../plays.json';

/** 질의 함수 -> plays의 데이터 추출 */
function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

export default playFor;
