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

// 두개는 아예 다른 타입
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

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
interface Point2D {
    x: number;
    y: number;
}
function distance2(a: Point2D, b: Point2D) {} //타입선언으로 인한 타입 중복 제거

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
type PersonWithBirthDate3 = Person & { birth: Date };

//////////////////////////////////

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

////////////////////////////////////

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

////////////////////////////////////////

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

const INIT_OPTIONS = {
    width: 640,
    height: 400,
    color: '#00FF00',
    label: 'VGA',
};
type Options10 = typeof INIT_OPTIONS; // typeof를 통한 type 지정 (타입스크립트 컴파일단계의 typeof)

////////////////////////////////////////////////////////////

function getUserInfo(userId: string) {
    const height = 0;
    const width = 0;
    const favoriteColor = 'red';
    return { userId, name, age, height, width, favoriteColor };
}
type UserInfo = ReturnType<typeof getUserInfo>; // ReturnType 연산자로 getUserInfo함수의 return 타입을 선언함.

////////////////////////////////////////////////////////////////
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
