/** 유니온 타입 */
let mathmatician = Math.random() > 0.5 ? undefined : 'Mark Goldberg';

let thinker: string | null = null; // 유니온타입으로 잡재적으로 string값도 올 수 있다고 알려줌
if (Math.random() > 0.5) {
  thinker = 'Susanne Langer';
}

let physicist = Math.random() > 0.5 ? 'Marie Curie' : 84;
physicist.toString(); // String, Number 래퍼 객체 모두 toString 있음.
physicist.toUpperCase(); // Number 래퍼 객체에는 없음.
physicist.toFixed(); // String 래퍼 객체에는 없음.

/** 값 할당을 통한 내로잉 */
let admiral: number | string;
admiral = 'Grace Hopper'; // string
admiral.toUpperCase();
admiral.toFixed();

/** 조건 검사를 통한 내로잉 */
let scientist = Math.random() > 0.5 ? 'Rosalind Franklin' : 51; // string | number
if (typeof scientist === 'string') {
  scientist.toUpperCase(); // string
} else {
  scientist.toFixed(); // number
}
typeof scientist === 'string' ? scientist.toUpperCase : scientist.toFixed;

/** 리터럴 타입 */
const math = 'Math'; // 상수 이기 때문에 리터럴 'Math'로 추론

let lifespan: number | 'ongoing' | 'uncertain'; // 리터럴과 number원시타입을 섞어서 사용가능
lifespan = true;

let specificallyAda: 'Ada';
specificallyAda = 'Ada';
specificallyAda = 'Byron';

let someString = 'Ada'; // string
specificallyAda = someString; // string -> 'Ada' x

const tenDollorMistake: string = null;
let nameMaybe = Math.random() > 0.5 ? 'Tony Hoare' : undefined;

/** 참 검사를 통한 내로잉 */
let geneticist = Math.random() > 0.5 ? 'Barbara McClintock' : undefined;
if (geneticist) {
  geneticist.toUpperCase();
}

let biologist = Math.random() > 0.5 && 'Rachel Carson';
if (biologist) {
  biologist; // string
} else {
  biologist; // string | false --> "" 빈 문자열이 들어올 수 있다.
}

/** 초기값이 없는 변수 */
let init: string;
init?.length; // init이 undefined이라서 나는 오류

export {};
