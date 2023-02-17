/** any 다시 보기 */
let anyValue: any;
anyValue = 'ball';
anyValue = 123;
console.log(anyValue);

/** unknown */
function greetCommedian(name: unknown) {
  console.log(name.toUpperCase());
}

function greetCommedianSafety(name: unknown) {
  if (typeof name === 'string') {
    console.log(name.toUpperCase());
  } else {
    console.log(name); // unknown
  }
}
greetCommedianSafety('betty white');
greetCommedianSafety({});

/** 타입 서술어 */
function isNumberOrString(value: unknown) {
  return ['number', 'string'].includes(typeof value);
}
function logValueIfExists(value: number | string | undefined) {
  if (isNumberOrString(value)) {
    value.toString();
  } else {
    value;
  }
}

function isNumberOrStringPredicate(value: unknown): value is number | string {
  return ['number', 'string'].includes(typeof value);
}
function logValueIfExistsPredicate(value: number | string | undefined) {
  if (isNumberOrStringPredicate(value)) {
    value.toString(); // number | string
  } else {
    value;
  }
}

////////////////////////////////////////////

interface Comedian {
  funny: boolean;
}
interface StandupComedian extends Comedian {
  routine: string;
}
function isStandupComedian(value: Comedian): value is StandupComedian {
  return 'routine' in value;
}
function workWithComedian(value: Comedian) {
  if (isStandupComedian(value)) {
    value.routine; // StandupComedian
  } else {
    value.routine; // Comedian
  }
}

///////////////////////////////////////////////

function isLognString(input: string | undefined): input is string {
  return !!(input && input.length >= 7);
}
function workWithText(text: string | undefined) {
  if (isLognString(text)) {
    text.length; // string
  } else {
    text.length; // undefined
  }
}

/** 타입 연산자 (keyof) */
interface Ratings {
  audience: number;
  critics: number;
}
function getRating(ratings: Ratings, key: string): number {
  return ratings[key]; // key가 string형식이라 Ratings에 있는 속성이 아닐 수 도 있다.
}

const ratings: Ratings = { audience: 66, critics: 84 };
getRating(ratings, 'audience');
getRating(ratings, 'not valid'); //undefined

/** 타입 연산자 (typeof) */
const original = {
  medium: 'movie',
  title: 'mean girls',
};
let adaptation: typeof original;
if (Math.random() > 0.5) {
  adaptation = { ...original, medium: 'play' };
} else {
  adaptation = { ...original, medium: 2 }; // medium 은 string이다.
}

/** 타입 연산자 (keyof typeof) */
const ratings2 = {
  imdb: 8.4,
  metacritic: 82,
};
function logRating(key: keyof typeof ratings2) {
  return ratings2[key];
}
logRating('imdb');
logRating('invalid'); // ratings2의 key가 아니라서 오류.

/** 타입 단언 */
const rawData = '["grace", "frankie"]';
const parse1 = JSON.parse(rawData);
const parse2 = JSON.parse(rawData) as string[];
const parse3 = JSON.parse(rawData) as [string, string];
const parse4 = JSON.parse(rawData) as ['grace', 'frankie'];

let maybeDate = Math.random() > 0.5 ? undefined : new Date();
const maybe1 = maybeDate as Date;
const maybe2 = maybeDate!;

/** 타입단언 주의사항 */
const seasonCounts = new Map([
  ['braod city', 5],
  ['coummunity', 6],
]);
const knownValue = seasonCounts.get('I love Lucy'); // undefined
knownValue.toString(); // 오류 undefined

/** 타입 단언 vs 타입 선언 */
interface Entertainer {
  acts: string[];
  name: string;
}
const declared: Entertainer = {
  name: 'moms mabley',
};
const asserted = {
  name: 'moms mabley',
} as Entertainer;

/** const 단언문 */
const c = [0, ''];
const c1 = [0, ''] as const;

const getName = () => 'maria bamford';
const getNameWithConst = () => 'maria bamford' as const;

/** 리터럴에서 원시 타입으로 */
interface Joke {
  quote: string;
  style: 'story' | 'one-liner';
}
function tellJoke(joke: Joke) {
  if (joke.style === 'one-liner') {
    console.log(joke.quote);
  } else {
    console.log(joke.quote.split('\n'));
  }
}
const narrowJoke = {
  quote: 'if you stay alive for no ...',
  style: 'one-liner' as const,
};
tellJoke(narrowJoke); //정상

const wideObject = {
  quote: 'time files when you',
  style: 'one-liner',
};
tellJoke(wideObject);

/** 읽기 전용 객체 */
function describePreference(preference: 'maybe' | 'no' | 'yes') {
  switch (preference) {
    case 'maybe':
      return 'maybe';
    case 'no':
      return 'no';
    case 'yes':
      return 'yes';
  }
}
const preferenceMutable = {
  movie: 'maby',
  standup: 'yes',
};
describePreference(preferenceMutable.movie);
preferenceMutable.movie = 'no';

const preferenceReadonly = {
  movie: 'maybe',
  standup: 'yes',
} as const;
describePreference(preferenceReadonly.movie);
preferenceReadonly.movie = 'no';

export {};
