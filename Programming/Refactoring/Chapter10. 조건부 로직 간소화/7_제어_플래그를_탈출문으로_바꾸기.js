/*
  제어 플래그를 탈출문으로 바꾸기 (잘 이해가안됨.)

  [배경]
  - 반복문을 작성하다보면 isFind같은 제어 플래그를 사용하는 경우가 있다.
    이런애들은 삭제하고 break, return으로 해당 반복문을 끝내버리자.
  - 윗 내용을 하기 위해서 리팩토링하여 작게 추출하자.

  [절차]
  1. 제어 플래그를 사용하는 코드를 함수로 추출할지 고려한다.
  2. 제어 플래그를 갱신하는 코드 각각을 적절한 제어문으로 바꾼다.
  3. 제어 플래그를 제거한다.
*/

function checkForMiscreants(people) {
  for (const p of people) {
    if (p === '조커') {
      sendAlert();
      return;
    }
    if (p === '사루만') {
      sendAlert();
      return;
    }
  }
}
checkForMiscreants(people);
