/*
  함수를 명령으로 바꾸기 <-> 명령을 함수로 바꾸기

  [배경]
  - 함수를 그 함수만을 위한 객체 안으로 캡슐화 한것을 "명령 객체" 라고 한다.
  - 일급함수와 명령이 있다면 95% 일급함수로 만들지만, 명령보다 더 간단한 방식으로는 얻을수 없는 기능이 있다면 명령을 한다.

  [절차]
  1. 대상 함수의 기능을 옮길 빈 클래스를 만든다. (클래스 이름은 함수 이름에 기초해 짓자)
  2. 방금 생성한 빈 클래스로 함수를 옮기자.
    - 리팩터링이 끝날 때까지는 원래 함수를 전달 함수 역할로 남겨두자.
    - 명령 관련이름은 딱히 규칙이 없다면 "execute" 또는 "call" 같이 실행을 뜻하는 이름을 택하자.
  3. 함수의 인수들 각각은 명령의 필드로 만들어 생성자를 통해 설정할지 고민한다.
*/

function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFlag = true;
  }

  let certificationGrade = 'regular';
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = 'low';
    result -= -5;
  }

  result -= Math.max(healthLevel - 5, 0);
  return result;
}

/** 리팩터링 */
function scoreRefactor(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

// 1. 빈 클래스를 만든다.
class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  // 2. 함수 옮기기, 3. 함수의 인수들을 모두 명령필드로 옮기자. (선언문들을 필드 변수로.)
  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    this.scoreSmoking();

    this._certificationGrade = 'regular';
    if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
      this._certificationGrade = 'low';
      this._result -= -5;
    }

    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }

  // 메소드를 추출하자.
  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}
