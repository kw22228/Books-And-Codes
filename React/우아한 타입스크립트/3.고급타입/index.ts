/**
 * any 타입
 * 자바스크립트의 모든 값을 오류 없이 받을 수 있다.
 * 즉, 타입을 명시하지 않은 것과 동일한 효과를 나타냄.
 */
let state: any;

state = { value: 0 };
state = 100;
state = 'hello world';
state.foo = () => console.log('this is any type');

/**
 * any 타입을 어쩔 수 없이 사용해야할때
 */
//1. 개발 단계에서 임시로 값을 지정해야 할 때

/** 2. 어떤 값을 받아올지 또는 넘겨줄지 정할 수 없을 때 */
type TFeedbackModalParams = {
  show: boolean;
  content: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  beforeOnClose?: () => void;
  action?: any; // 명확한 값이 정해지지 않음.
};

/** 3. 값을 예측할 수 없을 때 암묵적으로 사용 */
async function load() {
  const response = await fetch('https://api.com');
  const data = await response.json(); // response data를 예측할 수 없기 때문에 any타입으로 자동 추론하게 냅둠.

  return data;
}

/**
 * unknown 타입
 * any타입과 유사하게 모든 타입의 값이 할당될 수 있다.
 * 하지만 any를 제외한 다른 타입으로 선언된 변수에는 unknown
 * unknown은 any와 마찬가지로 어떤 타입이 할당되는지 알 수 없을때 임시 방편(?)느낌으로 사용하지만
 * any와 다르게 선언된 변수의 내부 속성에 접근 할 수 없다.
 * 즉, any보다는 훨씬 엄격한 타입 검사를 강제한다.
 */
let unknownValue: unknown;

unknownValue = 100;
unknownValue = 'hello world';
unknownValue = () => console.log('this is any type');

let someValue1: any = unknownValue;
let someValue2: number = unknownValue;
let someValue3: string = unknownValue;

const unknownFunction: unknown = () => console.log('this is unknown type');
unknownFunction();

/**
 * void 타입
 * 함수에서 아무런 값을 반환하지 않는 경우.
 * 또는, 변수에 지정하지만 무의미하다.
 * 변수에 지정할 경우 undefined와 null값만 할당 가능함.
 */
let voidValue: void = undefined;
voidValue = null;

/**
 * Array 타입
 * Object.prototype.toString.call을 사용하면 해당 객체의 인스턴스까지 알려준다.
 */
const arr = [];
console.log(Object.prototype.toString.call(arr));

const fn = () => console.log(1);
const array = [1, 'string', fn];

const numberArray: number[] = [1, 2, 3];
const numberArrayGeneric: Array<number> = [1, 2, 3];

const arrayGeneric1: Array<number | string> = [1, 'string'];
const array2: (number | string)[] = [1, 'string'];

let tuple: [number] = [1];
tuple = [1, 2];
tuple = [1, 'string'];
tuple = ['string'];

let tuple2: [number, string, boolean] = [1, 'string', true];

const httpStatusFromPaths: [number, string, ...string[]] = [
  400,
  'bad request',
  '/users/:id',
  '/users/:userId',
  '/users/:uuid',
];

const optionalTuple1: [number, number, number?] = [1, 2];
const optionalTuple2: [number, number, number?] = [1, 2, 3];

/**
 * enum타입
 * 일종의 구조체를 만드는 타입 시스템.
 */
enum ProgramingLanguage {
  Typescript,
  Javascript,
  Java,
  Python,
  Kotlin,
  Rust,
  Go,
}
ProgramingLanguage.Typescript; //0
ProgramingLanguage.Rust; //5
ProgramingLanguage['Go']; //6

ProgramingLanguage[2]; //Java

enum ItemStatusType {
  DELIVERY_HOLD = 'DELIVERY_HOLD',
  DELIVERY_READY = 'DELIVERY_READY',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
}
const checkItemAvailable = (itemStatus: ItemStatusType) => {
  switch (itemStatus) {
    case ItemStatusType.DELIVERY_HOLD:
    case ItemStatusType.DELIVERY_READY:
    case ItemStatusType.DELIVERING:
      return false;

    case ItemStatusType.DELIVERED:
    default:
      return true;
  }
};
export {};
