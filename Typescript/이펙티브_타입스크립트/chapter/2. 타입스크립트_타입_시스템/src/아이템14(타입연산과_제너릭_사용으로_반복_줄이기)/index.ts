/** 같은코드를 쓰지말라는 DRY원칙 */
const surfaceArea = (r, h) => 2 * Math.PI * r(r + h);
const volume = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [
    [1, 1],
    [1, 2],
    [2, 1],
]) {
    console.log(
        `Cylinder ${r} x ${h}`,
        `Surface area: ${surfaceArea(r, h)}`,
        `Volume: ${volume(r, h)}`
    );
}
/** 같은코드를 쓰지말라는 DRY원칙 */

/** 두개는 아예 다른 타입 */
interface Person {
    firstName: string;
    lastName: string;
    middleName: string;
}
interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
}
/** 두개는 아예 다른 타입 */

/** 반복적인 타입선언 줄이기 */
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
interface Point2D {
    x: number;
    y: number;
}
function distance2(a: Point2D, b: Point2D) {} //타입선언으로 인한 타입 중복 제거
/** 반복적인 타입선언 줄이기 */

//////////////////////////////

function get(url: string, opts: Options): Promise<Response> {
    return;
}
function post(url: string, opts: Options): Promise<Response> {
    return;
}

type HTTPFunction = (url: string, opts: Options) => void;
const get2: HTTPFunction = (url, opts) => {};
const post2: HTTPFunction = (url, opts) => {};

///////////////////////////////

interface Person {
    firstName: string;
    lastName: string;
}
interface PersonWithBirthDate2 extends Person {
    birth: Date;
}
type PersonWithBirthDate3 = Person & { birth: Date }; //유니온타입에 속성을 추가할때 유용.

/** TopNavState를 확장하기보다 State의 부분집합을 사용 */
interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}
interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
}

// State를 인덱싱하여 중복제거
type TopNavState2 = {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
};
type TopNavState3 = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]; //매핑된 타입으로 반복 제거
};
// type Pick<T, K> = { [k in K]: T[k] };
type TopNavState4 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>; // Pick연산자를 통한 매핑
/** TopNavState를 확장하기보다 State의 부분집합을 사용 */

/** Pick연산자를 통한 Type의 반복 줄이기 */
interface SaveAction {
    type: 'save';
}
interface LoadAction {
    type: 'load';
}
type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load'; // 타입의 반복
type ActionType2 = Action['type'];
type ActionRec = Pick<Action, 'type'>;
/** Pick연산자를 통한 Type의 반복 줄이기 */

/** Partial연사자를 통한 선택자 옵션 선언하기 */
interface Options9 {
    width: number;
    height: number;
    color: string;
    label: string;
}
interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}
class UIWidget {
    constructor(init: Options9) {}
    update(options: OptionsUpdate) {}
}

type OptoinsKeys = keyof Options9;
type OptionsUpdate2 = {
    [k in keyof Options9]?: Options9[k];
};
type OptionsUpdate3 = Partial<Options9>; // Partial은 Pick의 ?.로 들어오는거같음.
class UIWidget2 {
    constructor(init: Options9) {}
    update(options: Partial<Options9>) {}
}
/** Partial연사자를 통한 선택자 옵션 선언하기 */

/** 타입스크립트의 typeof */
const INIT_OPTIONS = {
    width: 640,
    height: 400,
    color: '#00FF00',
    label: 'VGA',
};
type Options10 = typeof INIT_OPTIONS; // typeof를 통한 type 지정 (타입스크립트 컴파일단계의 typeof)
/** 타입스크립트의 typeof */

/** ReturnType 연산자를 통한 return 타입 선언 */
function getUserInfo(userId: string) {
    const height = 0;
    const width = 0;
    const favoriteColor = 'red';
    return { userId, name, age, height, width, favoriteColor };
}
type UserInfo = ReturnType<typeof getUserInfo>; // ReturnType 연산자로 getUserInfo함수의 return 타입을 선언함.
/** ReturnType 연산자를 통한 return 타입 선언 */

/** 제네릭에 타입을 제한하기 위한 방법 (extends) */
interface Name {
    first: string;
    last: string;
}
type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
    { first: 'Fred', last: 'Astaire' },
    { first: 'Fred', last: 'Astaire' },
];
const couple2: DancingDuo<{ first: string }> = [{ first: 'sonny' }, { first: 'Cher' }]; // Name형식에 위배됨.

type Pick<T, K> = {
    [k in K]: T[k];
};
type Pick2<T, K extends keyof T> = {
    [k in K]: T[k];
};
/** 제네릭에 타입을 제한하기 위한 방법 (extends) */

type FirstLast = Pick<Name, 'first' | 'last'>;
type FirstMiddle = Pick<Name, 'first' | 'middle'>; //middle은 Name타입의 key에 없다.
