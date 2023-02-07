import test from 'node:test';

declare function map<U, V>(array: U[], fn: (u: U) => V): V[];
map(['2017', '2018', '2019'], v => Number(v));

const square = (n: number) => console.log(n);
test('square a number', () => {
  square(1);
  square(2);
});

const length: number[] = map(['join', 'paul'], name => name.length);

function assertType<T>(x: T) {}
assertType<number[]>(map(['john', 'paul'], name => name.length));

const n = 12;
assertType<number>(n); // 정상으로 들어오고있음.

/** 문제 */
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType<{ name: string }[]>(
  map(beatles, name => ({ name, inYellowSubmarine: name === 'ringo' }))
); // inYellowSubmaring은 체크되지 않음.

const add = (a: number, b: number) => a + b;
assertType<(a: number, b: number) => number>(add); // 정상

const double = (x: number) => 2 * x;
assertType<(a: number, b: number) => number>(double); //매개변수가 더적은 함수에 할당이 가능하다;

const g: (x: string) => any = () => 12; // 선언된 것보다 작은 매개변수를 가져도 상관없다.
// map(array, (name, index, array) => {});

/** 함수의 매개변수 타입과 반환 타입만 분리하기 */
let p: Parameters<typeof double> = [1];
assertType<[number, number]>(p);

let r: ReturnType<typeof double> = 1;
assertType<number>(r);

/** 세부사항 테스트 */
declare function map<U, V>(array: U[], fn: (this: U[], u: U, i: number, array: U[]) => V): V[];
assertType<number[]>(
  map(beatles, function (name: string, index: number, array: string[]) {
    assertType<string>(name);
    assertType<number>(index);
    assertType<string[]>(array);
    assertType<string[]>(this); // 화살표함수가 아니기 때문에 this가 있을 수 있음.

    return name.length;
  })
);

/*
  - 타입을 테스트할 때는 특히 함수 타입의 동일성과 할당 가능성의 차이점을 알고 있어야 한다.
  - 콜백이 있는 함수를 테스트 할때, 콜백 매개변수의 추론된 타입을 체크해야 한다.
    또한 this가 API의 일부분이라면 역시 테스트 해야 한다.
  - 타입 관련된 테스트에서 any를 주의해야한다. 더 엄격한 테스트를 위해 dtslint같은 도구를 사용하는것이 좋다.
*/
