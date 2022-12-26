/** (type 과 interface의 비슷한 점들) */

type TState = {
    name: string;
    capital: string;
};
interface IState {
    name: string;
    capital: string;
}

const wyoming: TState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000,
};

/** 인덱스 시그니처 */
type TDict = {
    [key: string]: string;
};
interface IDict {
    [key: string]: string;
}

/** 함수 타입 (type이 interface보다 나아보임) */
type TFn = (x: number) => string;
interface IFn {
    (x: number): string;
}
const toStrT: TFn = x => '' + x;
const toStrI: IFn = x => '' + x;

/** 함수 타입 + 추가적인 속성 */
type TFnWithProperties = {
    (x: number): number;
    prop: string;
};
interface IFnWithProperties {
    (x: number): number;
    prop: string;
}

/** 제네릭 */
type TPair<T> = {
    first: T;
    second: T;
};
interface IPair<T> {
    first: T;
    second: T;
}

/** 타입 확장 (인터페이스는 "유니온 타입" 같은 복잡한 타입은 확장하지 못함.) */
interface IStateWithPop extends TState {
    population: number;
}
type TStateWithPop = IState & { population: number };

/** 클래스 구현 타입 */
class StateT implements TState {
    name: string = '';
    capital: string = '';
}
class StateI implements IState {
    name: string = '';
    capital: string = '';
}

/** //-- (type 과 interface의 비슷한 점들) --// */

/** (type 과 interface의 다른 점들) */

/** 유니온 타입 */
type TAorB = 'a' | 'b'; // 유니온 타입 o
interface IAorB {} // 유니온 인터페이스 x

/** 유니온 타입 확장 */
type Input = {};
type Output = {};
interface VariableMap {
    [name: string]: Input | Output;
}
type NamedVariable = (Input | Output) & { name: string };

/** 튜플 타입 (type으로 구현하는게 더 나음)*/
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];

interface Tuple {
    0: number;
    1: number;
    length: 2;
}
const t: Tuple = [10, 20];

/** 인터페이스 선언병합 (인터페이스만 있음) */
interface IState {
    name: string;
    capital: string;
}
interface IState {
    population: number;
}

// 두번선언된 IState가 합쳐짐.
const wyoming2: IState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000,
};
/** //-- (type 과 interface의 다른 점들) --// */
