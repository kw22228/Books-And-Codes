/*
    @ts-check 지시자는 매우 느슨한 수준으로 타입을 체크한다. (noImplicitAny 설정보다 느슨함.)
    Javascript -> Typescript 로 마이그레이션하기전에 미리 @ts-check 지시자를 사용하여 체크해보자.
*/

//@ts-check

/** 타입 불일치 오류 */
const person = { first: 'Grace', last: 'Hopper' };
2 * person.first;

/**선언되지 않은 전역변수 */
///<reference path="types.d.ts"/>
console.log(user.firstName);

/** 알수 없는 라이브러리 */
$('#graph').style({ width: '100px', height: '100px' }); // $를 찾을수없다는 오류 -> npm i -D @types/jquery -> style 메소드 없다고 나옴.
$('#graph').css({ width: '100px', height: '100px' }); // 정상

/** DOM문제 */
const ageEl = document.getElementById('age');
ageEl.value = '12';

/** JSDoc */
const ageEl2 = /** @type {HTMLInputElement} */ (document.getElementById('age'));
ageEl2.value = '12';

/** 부정확한 JSDoc */
/**
 * 엘리먼트의 크기(픽셀 단위)를 가져온다.
 * @param {Element} el 해당 엘리먼트
 * @returns {{width: number, height: number}} 크기
 */
function getSize(el) {
  const bounds = el.getBoundingClientRect();

  return {
    width: bounds.width,
    height: bounds.height,
  };
}

/**
 * @param {number} val
 */
function doubleWithJSDoc(val) {
  return 2 * val;
}

/**
 * @param {{
 *  files: { forEach: (arg0: (file: any) => Promise<void>) => void; }
 * }} data
 */
function loadData(data) {
  data.files.forEach(async file => {
    // ...
  });
}
