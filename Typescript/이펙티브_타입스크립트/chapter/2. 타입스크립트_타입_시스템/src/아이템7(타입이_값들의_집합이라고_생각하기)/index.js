"use strict";
// never 타입 (never는 공집합 즉, 아무런 값도 할당할 수 없음)
const x = 12;
const a2 = 'A'; // 'A'는 집합 {'A', 'B'}의 원소
const c2 = 'C'; // 'C'는 집합의 원소가 아님
const ab = Math.random() < 0.5 ? 'A' : 'B'; // 'A' 또는 'B' 둘다 부분집합 포함
const ab12 = ab;
const back = twelve; // AB의 잡합에 AB12의 값12는 부분집합이 아님
const ps = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
};
const pas = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
};
/////////////////////////////////////////////////
function getKey(val, key) { }
getKey({}, 'x'); // 'x'는 string을 상속
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // 'a' | 'b'는 string을 상속
getKey({}, document.title); // document.title은 string
getKey({}, 12); // number형식은 string형식에 할당 x
// K는 T의 keyof인 'x' 또는 'y'만 허용
function sortBy(vals, key) {
    return vals;
}
const pts = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];
sortBy(pts, 'x'); // 'x'는 'x' | 'y'를 상속
sortBy(pts, 'y'); // 'y'는 'x' | 'y'를 상속
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // 'x' | 'y' 는 'x' | 'y'를 상속
sortBy(pts, 'z'); // 'z'는 'x' | 'y'의 할당 x
///////////////////////////////
const list = [1, 2];
const tuple = list; //list는 튜플 타입이아닌 number[]
const triple = [1, 2, 3]; // typescript는 숫자의 쌍을 length로 구분함 (length: 2)
const double = triple; // 따라서 length가 일치하지않기 떄문에 오류
