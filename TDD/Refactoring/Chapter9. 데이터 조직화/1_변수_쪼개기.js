/*
  변수 쪼개기

  [배경]
  하나의 변수에 두개 이상의 역할이 있다면 해당 변수를 나눠준다.

  [절차]
  1. 변수를 선언한 곳과 값을 대입한 곳에서 변수 이름을 바꾼다.
  2. 가능하면 상수로 선언한다.
  3. 이 변수에 두 번재로 값을 대입하는 곳 앞까지의 모든 참조를 새로운 변수 이름으로 바꾼다.
  4. 두 번째 대입 시 변수를 원래 이름으로 다시 선언한다.
*/

function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // 1번째 대입
  let primaryTime = Math.min(time, scenario.delay);

  result = 0.5 * acc * primaryTime;

  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // 2번째 대입

    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}

/** 리팩터링 */
function distanceTravelledRefactor(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 1. 변수 이름 바꾸기, 2. 상수로 선언
  let primaryTime = Math.min(time, scenario.delay); // 3. 값을 대입하는곳 새로운 변수로 변경

  result = 0.5 * primaryAcceleration * primaryTime;

  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay; // 3. 값을 대입하는곳 새로운 변수로 변경
    // let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // 4. 두번 째 대입시 원래 이름으로 다시 선언
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // 5. 적당한 이름으로 변수명 바꿔주기 + 상수 선언

    result +=
      primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;
}

////////////////// 입력 매개변수의 값을 수정할 때 ///////////////////////
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

/** 리팩터링 */
function discountRefactor(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = inputValue - 2;
  if (quantity > 100) result = inputValue - 1;
  return result;
}
