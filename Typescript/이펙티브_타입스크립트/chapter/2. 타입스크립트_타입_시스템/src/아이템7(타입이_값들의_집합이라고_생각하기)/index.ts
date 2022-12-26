// never 타입 (never는 공집합 즉, 아무런 값도 할당할 수 없음)
const x: never = 12;

// unit타입 (literal타입)
type A = 'A';
type B = 'B';
type Twelve = 12;

// Union타입 (unit타입을 2개 혹은 세개이상 어려개로 묶음)
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a2: AB = 'A'; // 'A'는 집합 {'A', 'B'}의 원소
const c2: AB = 'C'; // 'C'는 집합의 원소가 아님

const ab: AB = Math.random() < 0.5 ? 'A' : 'B'; // 'A' 또는 'B' 둘다 부분집합 포함
const ab12: AB12 = ab;

declare let twelve: AB12;
const back: AB = twelve; // AB의 잡합에 AB12의 값12는 부분집합이 아님

////////////////////////////////////////////////////////

interface Person3 {
    name: string;
}
interface Lifespan {
    birth: Date;
    death?: Date;
}
type PersonSpan = Person3 & Lifespan; // &연산자는 두 타입의 교집합을 의미함. (둘이 공통속성이 없어 공집합으로 착각할 수 있지만, 인터페이스 속성이 아닌 값의 집합(타입의 범위)에 적용된다. -- 솔직히 뭔말이지 잘 모르겠음.)
const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
};

///////////////////////////////////////////////////

type K = keyof (Person | Lifespan); // type이 never
// keyof (A & B) ==> keyof A | keyof B
// keyof (A | B) ==> keyof A & keyof B

interface PersonAndSpan extends Person3 {
    birth: Date;
    death?: Date;
}

const pas: PersonAndSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
};

/** 서브 타입이란 무엇일까? */
// interface Vector1D {
//     x: number;
// }
// interface Vector2D {
//     x: number;
//     y: number;
// }
// interface Vector3D {
//     x: number;
//     y: number;
//     z: number;
// }

// 위랑 같다.
interface Vector1D {
    x: number;
}
// Vector2D는 Vector1D의 서브타입.
interface Vector2D extends Vector1D {
    y: number;
}
//Vector3D는 Vector2D의 서브타입.
interface Vector3D extends Vector2D {
    z: number;
}

/////////////////////////////////////////////////
function getKey<K extends string>(val: any, key: K) {}

getKey({}, 'x'); // 'x'는 string을 상속
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // 'a' | 'b'는 string을 상속
getKey({}, document.title); // document.title은 string
getKey({}, 12); // number형식은 string형식에 할당 x

interface Point {
    x: number;
    y: number;
}
type PointKey = keyof Point; // 타입은 'x' | 'y'

// K는 T의 keyof인 'x' 또는 'y'만 허용
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
    return vals;
}
const pts: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];
sortBy(pts, 'x'); // 'x'는 'x' | 'y'를 상속
sortBy(pts, 'y'); // 'y'는 'x' | 'y'를 상속
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // 'x' | 'y' 는 'x' | 'y'를 상속
sortBy(pts, 'z'); // 'z'는 'x' | 'y'의 할당 x

///////////////////////////////

const list = [1, 2];
const tuple: [number, number] = list; //list는 튜플 타입이아닌 number[]

const triple: [number, number, number] = [1, 2, 3]; // typescript는 숫자의 쌍을 length로 구분함 (length: 2)
const double: [number, number] = triple; // 따라서 length가 일치하지않기 떄문에 오류

///////////////////////////////
type T = Exclude<string | Date, string | number>;
type NonZeroNums = Exclude<number, 0>;
