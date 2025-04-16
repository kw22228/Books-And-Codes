var name = 'zig';
var year = 2022;

const num: number = 123;
const str: string = 'abc';

function func(n: number) {
  return n;
}

func(num);
console.log(func(str));

function double(n: number) {
  return n * 2;
}

double(2);
double(`z`);

/////////////////////////////////////////////////////////

/**
 * 타입 애너테이션
 * 변수나 상수 혹은 함수의 인자와 반환 값에 타입을 명시적으로 선언하여
 * 어떤 타입이 저장될 것인지를 컴파일러에 직접 알려주는 문법.
 * */
let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'blue';
let list: number[] = [1, 2, 3];
let x: [string, number]; //tuple

/**
 * 구조적 타이핑
 * 타입스크립트는 이름으로 타입을 구분하는 명목적인 타입 언어와 달리
 * 구조로 타입을 구분한다. 이것을 구조적 타이핑 이라고함.
 */
interface Developer {
  faceValue: number;
}
interface BankNote {
  faceValue: number;
}

let developer: Developer = { faceValue: 52 };
let bankNote: BankNote = { faceValue: 10000 };

developer = bankNote;

/**
 * 구조적 서브타이핑
 * 타입을 집합으로 나타낼 수 있는 것을 구조적 서브타이핑이라고 한다.
 * (타입 작은것 = 타입 큰것)
 */

type stringOrNumber = string | number;
interface Pet {
  name: string;
}
interface Cat {
  name: string;
  age: number;
}

let pet: Pet;
let cat: Cat = { name: 'Zag', age: 2 };
pet = cat;

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Developer {
  name: string;
  age: number;
  sleepTime: number;

  constructor(name: string, age: number, sleepTime: number) {
    this.name = name;
    this.age = age;
    this.sleepTime = sleepTime;
  }
}

function greet(p: Person) {
  console.log(`Hello i'm ${p.name}`);
}

const developer1 = new Developer('zig', 20, 78);
greet(developer1);

interface Cube {
  width: number;
  height: number;
  depth: number;
}
function addLines(c: Cube) {
  let total = 0;

  for (const axis of Object.keys(c)) {
    const length = c[axis];

    total += length;
  }

  console.log(total);
}

const namedCube = {
  width: 6,
  height: 5,
  depth: 4,
  name: 'SweetCube', // 구조적 타이핑으로 인해 Cube 인터페이스에 string 타입의 값이 들어감 (오류)
};
addLines(namedCube);

function greet1(name: string) {
  console.log('Hello', name);
}
greet1('aaa');

//////////////////////////////////////////////////////

/** enum타입 */
enum WeekDays {
  MON = 'Mon',
  TUES = 'Tues',
  WEDNES = 'Wednes',
  THURS = 'Thurs',
  FRI = 'Fri',
}
type WeekDaysKey = keyof typeof WeekDays;
function printDay(key: WeekDaysKey, message: string) {
  const day = WeekDays[key];
  if (day <= WeekDays.WEDNES) {
    console.log(`It's still ${day}day, ${message}`);
  }
}
printDay('WEDNES', 'wanna go home');

enum MyColors {
  BLUE = '#0000FF',
  YELLOW = '#FFFF00',
  MINT = '#2AC1BC',
}
function whatMintColor(palette: { MINT: string }) {
  return palette.MINT;
}
console.log(whatMintColor(MyColors));

/**
 * 타입을 확인하는 방법
 * keyof instanceof
 * @returns Boolean, null, undefined, Number, BigInt, String, Symbol, Function, object
 */
interface IPerson {
  first: string;
  last: string;
}
const person: IPerson = { first: 'zig', last: 'song' };
function email(options: { person: Person; subject: string; body: string }) {}
type T1 = typeof person;
type T2 = typeof email;

/**
 * 타입 단언
 * as 키워드를 이용하여 타입을 강제한다
 */
const loaded_text: unknown = '';

const validateInputText = (text: string) => {
  if (text.length < 10) return '최소 10글자 이상 입력해야 합니다.';
  return '정상 입력된 값입니다.';
};
validateInputText(loaded_text as string);
export {};
