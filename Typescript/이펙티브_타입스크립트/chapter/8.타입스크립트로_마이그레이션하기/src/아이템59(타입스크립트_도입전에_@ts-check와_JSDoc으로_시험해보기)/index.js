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
