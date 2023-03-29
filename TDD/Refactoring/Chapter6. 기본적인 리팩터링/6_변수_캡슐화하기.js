/*
  변수 캡슐화하기

  [배경]
  - 접근 번위가 넓은 데이터를 그 데이터로의 접근을 독점하는 함수로 캡슐화 하자.
    - 추가 로직을 쉽게 끼워넣을 수 있다.
  - 불변 데이터는 변경될 일이 없기 때문에 캡슐화 할 필요없다.

  [절차]
  1. 변수의 접근과 갱신을 전담하는 캡슐화 함수를 만들자
  2. 정적 검사를 수행한다.
  3. 변수에 직접 참조하는 부분을 모두 캡슐화 함수 호출로 수정하자.
  4. 변수의 접근 범위를 제한하자.
  5. 같은 모듈로 옮기고 접근함수만 export하자.
  6. 레코드 캡슐화는 클래스로 감싸자.
*/

const spaceship = {};
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};
spaceship.owner = defaultOwner;

/** getter & setter로 캡슐화 */
function getDefaultOwner() {
  return defaultOwner;
}
function setDefaultOwner(arg) {
  defaultOwner = arg;
}

spaceship.owner = getDefaultOwner();
console.log(spaceship);

setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });
spaceship.owner = getDefaultOwner();
console.log(spaceship);

// ./defaultOwner.js 참고
