let singer = 'Aretha'; // string
const singerC = 'Aretha'; // unit

let n = 1337; // number
let nB = 1337n; // bigint

let firstName = 'Whitney';
firstName.length();

firstName = 'Joan';
firstName = 12;

/** 진화하는 any타입 */
let rocker; // 진화하는 any
rocker = 'Joan Jett'; // string
rocker.toUpperCase();

rocker = 19.58; // number
rocker.toPrecision();

rocker.toUpperCase(); // error

/** 타입 어노테이션 */
let anotate: string = 'anotate';
anotate = 'hello';
anotate = 12;

const cher = {
  firstName: 'kim',
  lastName: 'jaewon',
};

export {}; // 모듈파일로 만들기 위한 export
