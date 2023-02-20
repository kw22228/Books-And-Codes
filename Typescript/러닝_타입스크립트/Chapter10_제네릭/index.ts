function identity<T>(input: T) {
  return input;
}
const numeric = identity('me');
const stringy = identity(123);

const identityArrow = <T>(input: T) => input;
identityArrow(123);

/** 명시적 제네릭 호출 타입 */
function logWrapper<T>(callback: (input: T) => void) {
  return (input: T) => {
    console.log(input);
    callback(input);
  };
}

logWrapper((input: string) => {
  console.log(input.length);
});

//명시적 제네릭
logWrapper<string>(input => {
  console.log(input.length);
});
logWrapper<string>((input: boolean) => console.log(input.length));

/** 다중 함수 타입 매개변수 */
function makeTuple<K, U>(first: K, second: U) {
  return [first, second] as const;
}
let tuple = makeTuple(true, 'abc');

function makePair<K, U>(key: K, value: U) {
  return { key, value };
}
makePair('abc', 123);
makePair<string, number>('abc', 123);
makePair<'abc', 123>('abc', 123);
makePair<string>('abc', 123); // 2개의 제네릭 매개변수에 1개만 들어옴

/** 제네릭 제한자 */
interface Quote<T = string> {
  value: T;
}
let explicit: Quote<number> = { value: 123 };
let implicit: Quote = { value: '123123213' };
let mismatch: Quote = { value: 123 };

/////////////////////////////

interface KeyValuePair<K, V = K> {
  key: K;
  value: V;
}

let allExplicit: KeyValuePair<string, number> = {
  key: 'rating',
  value: 10,
};
let oneDefaulting: KeyValuePair<string> = {
  key: 'rating',
  value: 'ten',
};

// 필수 인수가 없음.
let firstMissing: KeyValuePair = {
  key: 'rating',
  value: 10,
};

//////////////////////////////

function inTheEnd<T, K, U = number, V = string>() {}
function inTheMiddle<T, K = boolean, U = number, V>() {}

/** 제한된 제네릭 타입 */
interface WithLength {
  length: number;
} // length 프로퍼티를 가진 모든 타입.
function logWithLength<T extends WithLength>(input: T) {
  return input;
}

logWithLength('asdfasdf');
logWithLength([false, true]);
logWithLength({ length: 123 });

logWithLength(new Date());

/** keyof와 제한된 타입 매개변수 */
function get<T, K extends keyof T>(container: T, key: K) {
  return container[key];
}
const roles = {
  favorite: 'fargo',
  others: ['almost, burn, nomad'],
};

const favorite = get(roles, 'favorite');
const others = get(roles, 'others');

const missing = get(roles, 'extras');

/////////////////////////////////////

function get2<T>(container: T, key: keyof T) {
  return container[key];
}
const found = get2(roles, 'favorite');

/** Promise */
class PromiseLike<V> {
  constructor(excutor: (resolve: (value: V) => void, reject: (reason: unknown) => void) => void) {}
}

// Promise<unknown>
const resolveUnknown = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000);
});

// Promise<string>
const resolveString = new Promise<string>(resolve => {
  setTimeout(() => resolve('done!'), 1000);
});

//////////////////////////////////////////

const textEventually = new Promise<string>(resolve => {
  setTimeout(() => resolve('done!'), 1000);
});
const lengthEventually = textEventually.then(text => text.length);

/** Asnyc */
async function lengthAfterSecond(text: string) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return text.length;
}

async function lengthImmediately(text: string) {
  return text.length;
}

//////////////////////////////////////

async function givesPromiseForString(): Promise<string> {
  return 'Done!';
}

//Promise를 return해야함.
async function givesString(): string {
  return 'done!!';
}

/** 제네릭 올바르게 사용하기 */
function logInput<T extends string>(input: T) {
  console.log(input);
}

//굳이 제네릭을 사용할 필요없음.
function logInputRefactor(input: string) {
  console.log(input);
}

export {};
