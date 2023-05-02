/*
  수정된 값 반환하기

  [배경]
  - 변수를 갱신하는 함수라면 수정된값을 반환하여 호출자가 그 값을 변수에 담도록 한다.
  - 값을 계산한다는 분명한 목적이 있는 함수에 좋다. 반대로 여러 개 값을 갱신하는 함수는 별로.

  [절차]
  1. 함수가 수정된 값을 반환하게 하여 호출자가 그 값을 자신의 변수에 저장하게 한다.
  2. 피호출 함수 안에 반환할 값을 가리키는 새로운 변수를 선언한다.
  3. 계산이 선언과 동시에 이루어지도록 통합한다. (즉, 선언 시점에 계산 로직을 바로 실행해 대입한다.)
  4. 피호출 함수의 변수 이름을 새 역할에 어울리도록 바꿔준다.
*/

function execute() {
  let totalAscent = 0;
  let totalTime = 0;
  let totalDistance = 0;
  calculateAscent();
  calculateTime();
  calculateDistance();
  const pace = totalTime / 60 / totalDistance;
}

function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}

/** 리팩터링 (calculateAscent 함수만 고려해서 바꿔보자.) */
function executeRefactor() {
  // 3. 계산이 선언과 동시에 이루어지도록 통합한다.
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const totalAscent = calculateAscentRefactor(); // 1. 함수가 자신의 변수에 저장하게 한다.

  const pace = totalTime / 60 / totalDistance;
}

function calculateAscentRefactor() {
  let result = 0; // 2. 피호출 함수 안에 반환할 값을 가리키는 새로운 변수를 선언한다., 4. 변수이름을 역할에 어울리게 바꿔준다.
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}
