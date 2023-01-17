"use strict";
/** 같은코드를 쓰지말라는 DRY원칙 */
const surfaceArea = (r, h) => 2 * Math.PI * r(r + h);
const volume = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [
    [1, 1],
    [1, 2],
    [2, 1],
]) {
    console.log(`Cylinder ${r} x ${h}`, `Surface area: ${surfaceArea(r, h)}`, `Volume: ${volume(r, h)}`);
}
/** 두개는 아예 다른 타입 */
/** 반복적인 타입선언 줄이기 */
function distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
function distance2(a, b) { } //타입선언으로 인한 타입 중복 제거
/** 반복적인 타입선언 줄이기 */
//////////////////////////////
function get(url, opts) {
    return;
}
function post(url, opts) {
    return;
}
const get2 = (url, opts) => { };
const post2 = (url, opts) => { };
class UIWidget {
    constructor(init) { }
    update(options) { }
}
class UIWidget2 {
    constructor(init) { }
    update(options) { }
}
/** Partial연사자를 통한 선택자 옵션 선언하기 */
/** 타입스크립트의 typeof */
const INIT_OPTIONS = {
    width: 640,
    height: 400,
    color: '#00FF00',
    label: 'VGA',
};
/** 타입스크립트의 typeof */
/** ReturnType 연산자를 통한 return 타입 선언 */
function getUserInfo(userId) {
    const height = 0;
    const width = 0;
    const favoriteColor = 'red';
    return { userId, name, age, height, width, favoriteColor };
}
const couple1 = [
    { first: 'Fred', last: 'Astaire' },
    { first: 'Fred', last: 'Astaire' },
];
const couple2 = [{ first: 'sonny' }, { first: 'Cher' }]; // Name형식에 위배됨.
