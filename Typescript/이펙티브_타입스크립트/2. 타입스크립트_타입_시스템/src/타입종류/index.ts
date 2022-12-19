// never 타입 (never는 공집합 즉, 아무런 값도 할당할 수 없음)
const x: never = 12;

// unit타입 (literal타입)
type A = 'A';
type B = 'B';
type Twelve = 12;

// Union타입 (unit타입을 2개 혹은 세개이상 어려개로 묶음)
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const a: AB = 'A'; // 'A'는 집합 {'A', 'B'}의 원소
const c: AB = 'C'; // 'C'는 집합의 원소가 아님

const ab: AB = Math.random() < 0.5 ? 'A' : 'B'; // 'A' 또는 'B' 둘다 부분집합 포함
const ab12: AB12 = ab;

declare let twelve: AB12;
const back: AB = twelve; // AB의 잡합에 AB12의 값12는 부분집합이 아님

////////////////////////////////

interface Person {
    name: string;
}
interface Lifespan {
    birth: Date;
    death?: Date;
}
type PersonSpan = Person & Lifespan; // &연산자는 두 타입의 교집합을 의미함. (둘이 공통속성이 없어 공집합으로 착각할 수 있지만, 인터페이스 속성이 아닌 값의 집합(타입의 범위)에 적용된다. -- 솔직히 뭔말이지 잘 모르겠음.)

const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
};

type K = keyof (Person | Lifespan); // type이 never
// keyof (A & B) ==> keyof A | keyof B
// keyof (A | B) ==> keyof A & keyof B

interface PersonAndSpan extends Person {
    birth: Date;
    death?: Date;
}

const pas: PersonAndSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07'),
};

///////////////////////////////

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
interface Vector2D extends Vector1D {
    y: number;
}
interface Vector3D extends Vector2D {
    z: number;
}

///////////////////////////////

function getKey<K extends string>(val: any, key: K) {}

getKey({}, 'x'); // 'x'는 string을 상속
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // 'a' | 'b'는 string을 상속
getKey({}, document.title); // document.title은 string
getKey({}, 12); // number형식은 string형식에 할당 x

///////////////////////////////

interface Point {
    x: number;
    y: number;
}
type PointKey = keyof Point; // 타입은 'x' | 'y'

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
const tuple: [number, number] = list;

const triple: [number, number, number] = [1, 2, 3]; // typescript는 숫자의 쌍을 length로 구분함 (length: 2)
const double: [number, number] = triple; // 따라서 length가 일치하지않기 떄문에 오류

////////////////////////////////

type T = Exclude<string | Date, string | number>;
type NonZeroNums = Exclude<number, 0>;

///////////////////////////////////// 아이템 8 //////////////////////////////////////
// 타입 공간과 값 공간의 심벌 구분하기

//타입의 Cylinder
interface Cylinder {
    radius: number;
    height: number;
}
const Cylinder = (radius: number, height: number) => ({ radius, height }); //값의 Cylinder

function calculateVolume(shape: unknown) {
    // instaceof는 런타임 연산자, 즉 값의 Cylinder
    if (shape instanceof Cylinder) {
        shape.radius;
    }
}

//타입
type T1 = 'string literal';
type T2 = 123;

//값
const v1 = 'string literal';
const v2 = 123;

////////////////////////////////////

interface Person1 {
    first: string;
    last: string;
}
const p: Person1 = { first: 'Jane', last: 'Jacobs' };
//       --타입--   -------------값------------------

function email(p: Person, subject: string, body: string): Response {
    //        값    타입     값      타입    값    타입     타입(반환)
}

/////////////////////////////////////

class CylinderClass {
    radius = 1;
    height = 1;
}
function calculateVolume2(shape: unknown) {
    if (shape instanceof CylinderClass) {
        shape; // 타입은 CylinderClass
        shape.radius; // 타입은 number
    }
}

/////////////////////////////////////

type T11 = typeof p; // 타입 Person1
type T22 = typeof email; // 타입은 (p: Person, subject: string, body: string) => Rsponse;

const v11 = typeof p; // 값은 'object'
const v22 = typeof email; // 값은 'function'

/////////////////////////////////////

type C = InstanceType<typeof CylinderClass>;
const first: Person1['first'] = p['first'];
