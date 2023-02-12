const poet = {
  born: 1935,
  name: 'Mary Oliver',
};

poet['born']; // number
poet.name; // string

poet.end;

/** 명시적 선언 */
let PoetLater: {
  born: number;
  name: string;
}; // let으로도 type선언이 되네?

PoetLater = {
  born: 1935,
  name: 'Mary Oliver',
};
PoetLater = 'Sappho';

/** 타입 엘리어스 */
type Poet = {
  born: number;
  name: string;
};
let PoetLaterWithType: Poet;
PoetLaterWithType = {
  born: 1935,
  name: 'Sara Teasdale',
};
PoetLaterWithType = 'Emily Dickinson';

/** 구조적 타이핑 */
type WithFirstName = {
  firstName: string;
};
type WithLastName = {
  lastName: string;
};
const hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};

let withFirstName: WithFirstName = hasBoth; // firstName을 포함
let withLastNAme: WithLastName = hasBoth; // lastName을 포함

///////////////////////

type FirstAndLastNames = {
  first: string;
  last: string;
};

const hasBothWithType: FirstAndLastNames = {
  first: 'Sarojini',
  last: 'Naidu',
};

// last 프로퍼티가 없음.
const hasOnlyOne: FirstAndLastNames = {
  first: 'Sappho',
};

/** 해당하지 않는 타입 오류 */
type TimeRange = {
  start: Date;
};
const hasStartString: TimeRange = {
  start: '1879-231-23-13',
};

/** 초과 속성 검사 (객체 리터럴) */
type Poet2 = {
  born: number;
  name: string;
};

//필드와 일치
const poetMatch: Poet2 = {
  born: 1928,
  name: 'Maya Angelou',
};
// activity 초과
const extraProperty: Poet2 = {
  born: 1928,
  name: 'Maya',
  activity: 'walking',
};

const existingObject = {
  activity: 'walking',
  born: 1928,
  name: 'Maya',
};
const extraPropertyRefer: Poet2 = existingObject; //리터럴이라 구조적타이핑

/** 객체 타입 내로잉 (in) */
type PoemWithPages = {
  name: string;
  pages: number;
  type: 'pages';
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: 'rhymes';
};
type PoemUnion = PoemWithPages | PoemWithRhymes;
const poem: PoemUnion =
  Math.random() > 0.5 //
    ? { name: 'The', pages: 7, type: 'pages' }
    : { name: 'Her', rhymes: true, type: 'rhymes' };

// 내로잉
if ('pages' in poem) {
  poem; // PoemWithPages
} else {
  poem; // PoemWithRymes
}

//판별된 유니온
if (poem.type === 'pages') {
  poem;
} else {
  poem;
}

/** 교차 타입 위험성 */
type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kogo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem = Haiku | Villanelle;

// 오류 메세지를 읽기가 어려워짐
const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'villanelle',
};
export {};
