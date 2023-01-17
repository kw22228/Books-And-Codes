"use strict";
/** 타입 추론 */
let city = 'new york city';
console.log(city.toUpperCase()); //메소드가 오류인걸 알려줌.
/** 런타임에 발생할 사이드이펙트를 찾지 미리찾음 */
const states = [
    { name: 'Alabama', capital: 'Montgamery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
];
for (const state of states)
    console.log(state.capitol); //undefined
const states2 = [
    { name: 'Alabama', capital: 'Montgamery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
];
for (const state of states)
    console.log(state.capital);
const a = null + 7;
const b = [] + 12;
alert('Hello', 'Typescript');
/** 타입체커가 통과되더라도 런타임에서 오류나는 상황 */
const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());
