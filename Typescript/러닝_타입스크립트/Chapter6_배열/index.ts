const warriors = ['artemisia', 'boudica']; // string[] 으로 추론

warriors.push('zenobia');
warriors.push(12);

let arrayOfNumbers: number[];
arrayOfNumbers = [1, 2, 3, 4, 5];

/** 배열과 함수 타입 */
let createStrings: () => string[]; // string배열을 반환
let stringCreators: (() => string)[]; // string을 반환하는 메소드를 가진 배열을 반환

/** 유니온 타입에서 배열 */
let stringOrArrayOfNumbers: string | number[]; // string 또는 number[] 반환
let arrayOfStringOrNumbers: (string | number)[]; // string 또는 number를 가지는 배열 반환

const namesMaybe = ['auqa', undefined]; // (string | undefined)[]

/** any 배열의 진화 */
let arr = []; // any[] (암묵적 any)
arr.push('hi');
arr; // string[];
arr.push(1);
arr; // (string | number)[]

/** 2차원 배열 */
let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];

/** 배열의 불안정한 멤버 */
function withElements(elements: string[]) {
  console.log(elements[9001].length); // 타입오류 없음 undefined
}
withElements(['its', 'over']);

/** 스프레드 */
const soldiers = ['tubman', 'joan', 'khutulun'];
const soldierAges = [90, 19, 45];
const conjoined = [...soldiers, ...soldierAges];

/** 스프레드 rest parameter */
function logMarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}`);
  }
}
const war = ['carhay', 'lozen'];
logMarriors('hello', ...war);

const mar = [1844, 1850, 2223];
logMarriors('hlleo', ...mar);

/** tuple array */
const [year, warrior] =
  Math.random() > 0.5 //
    ? [340, 'archidmia']
    : [1828, 'rani']; // [number, string]

/** 튜플 할당 가능성 */
const pairLoose = [false, 123];
const pairTuple: [boolean, number] = pairLoose;

const tupleThree: [boolean, number, string] = [false, 1583, 'nzinga'];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[2]];

/** rest parameter tuple */
function logPair(name: string, value: number) {
  console.log(`${name} ${value}`);
}
const pairArray = ['amage', 1];
const pair2 = pairArray[0]; // string | number;
logPair(...pairArray);

const pairTupleInCorrect: [number, string] = [1, 'amage'];
const pairTupleCorrect: [string, number] = ['amage', 1];
logPair(...pairTupleInCorrect); // 순서가 바뀜
logPair(...pairTupleCorrect);

/** 튜플 추론 */
function firstCharAndSize(input: string) {
  return [input[0], input.length];
}
const [firstChar, size] = firstCharAndSize('gudit');

/** 명시적 튜플 타입 */
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}
const [firstCharExplicit, sizeExplicit] = firstCharAndSizeExplicit('cathay');

/** const 어서션 */
const unionArray = [1157, 'tomoe']; // (number | string)[]
const readonlyTuple = [1157, 'tomoe'] as const;

const pairMutable: [number, string] = [1157, 'tomoe'];
pairMutable[0] = 1247;

const pairAlsoMutable: [number, string] = [1157, 'tomoe'] as const; // readonly가 아니라서 못들어감

const pairConst = [1157, 'tomoe'] as const;
pairConst[0] = 1247;
export {};
