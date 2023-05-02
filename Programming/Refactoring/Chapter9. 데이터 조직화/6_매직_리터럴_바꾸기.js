/*
  매직 리터럴 바꾸기

  [배경]
  - 소스코드에 주로 여러 번 등장하는 일반적인 리터럴 값을 매직 리터럴이라고 한다.
  - 코드를 읽는 사람이 해당 값에 대한 의미를 알 수 있또록 상수값에 할당한다.

  [절차]
  1. 상수를 선언하고 매직 리터럴을 대입한다.
  2. 해당 리터럴이 사용되는 곳을 모두 찾는다.
  3. 같은 매직 리터럴이 상수와 같은 의미로 사용되었는지 확인후 수정한다.
  4. 테스트한다.
*/

const potentialEnergy = (mass, height) => {
  return mass * height * 9.81;
};

const STANDARD_GRAVITY = 9.81;
const potentialEnergyRefactor = (mass, height) => {
  return mass * height * STANDARD_GRAVITY;
};
