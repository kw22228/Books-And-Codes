"use strict";
//프로젝트내 변수 공유 체크로 인한 지역변수 사용.
/** 타입 추론으로 제각각 만들때 나는 오류 */
const pt = {}; //타입이 빈객체로 추론
pt.x = 3;
pt.y = 4;
const pt2 = {};
pt2.x = 3;
pt2.y = 4;
const pt3 = {
    x: 3,
    y: 4,
};
/** 타입 단언문으로 제각각 만들기 */
const ptWithAs = {};
ptWithAs.x = 3;
ptWithAs.y = 4;
ptWithAs.z = 5;
const pt4 = {
    x: 3,
    y: 4,
};
/** 작은 객체들을 조합해서 큰객체를 만들기 */
const pt5 = { x: 3, y: 4 };
const id = { name: 'Pythagoras' };
const namedPoint = {};
Object.assign(namedPoint, pt5, id);
//@ts-ignore
namedPoint.name; //오류 (namedPoint는 {}타입)
const newObj = { ...namedPoint, ...pt5, ...id };
newObj.name;
const ptt0 = {};
const ptt1 = { ...ptt0, x: 3 };
const ptt = { ...ptt1, y: 4 };
const firstLast = { first: 'Harry', last: 'Truman' };
const president = { ...firstLast, ...(hasMiddle ? { middle: 'S' } : {}) };
const nameTitle = { name: 'Khufu', title: 'Pharaoh' };
const pharaoh = {
    ...nameTitle,
    ...(hasDates ? { start: -2589, end: -2566 } : {}),
};
pharaoh.start;
/** 뭔가 책이랑 결과가 다름 */
/** 선택적 필드방식으로 표현하기 */
function addOptional(a, b) {
    return { ...a, ...b };
}
const pharaohOptional = addOptional(nameTitle, hasDates ? { start: -2589, end: -2566 } : null);
pharaoh.start;
/*
타입스크립트는 타입이 한번 정해지면 변경되지 않는다.
그래서 빈객체를 생성하고 그안에 프로퍼티를 추가하는식의 방법은 되지않는다. (빈객체를 생성할때 이미 타입이 빈객체로 추론됨.)
따라서, 한꺼번에 정의를 하는게 좋다. 꼭 객체를 제각각 나눠 만들어야 한다면 "타입 단언문"을 사용하자 !
*/
