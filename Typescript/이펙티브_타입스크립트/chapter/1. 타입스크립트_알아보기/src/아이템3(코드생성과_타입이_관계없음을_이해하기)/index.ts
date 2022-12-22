/** 타입오류가 있는 코드도 컴파일 가능. */
let hello = 'hello';
hello = 1234; //string -> number 타입오류

/** 런타임에는 타입 체크가 불가능하다. */
interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    // 런타임시에는 값으로 취급
    // if (shape instanceof Rectangle) {
    //     return shape.width * shape.height; // shape는 Square일수도 Rectangle일수도
    // } else {
    //     return shape.width * shape.width;
    // }

    //shape에 'height'라는 props가있으면
    if ('height' in shape) {
        shape;
        return shape.width * shape.height;
    } else {
        shape;
        return shape.width * shape.width;
    }
}

//////////////////////////////

interface Square2 {
    kind: 'square'; //union
    width: number;
}
interface Rectangle2 {
    kind: 'rectangle';
    height: number;
    width: number;
}
type Shape2 = Square2 | Rectangle2;

function calculateArea2(shape: Shape2) {
    if (shape.kind === 'rectangle') {
        shape;
        return shape.width * shape.height;
    }

    shape;
    return shape.width * shape.width;
}

const shape: Square2 = {
    kind: 'square',
    width: 80,
};
calculateArea2(shape);

////////////////////////// 클래스 (값으로도 타입으로도 사용가능)

class SquareClass {
    constructor(public width: number) {}
}
class RectangleClass extends SquareClass {
    constructor(public width: number, public height: number) {
        super(width);
    }
}
type Shape3 = Square | Rectangle;

function calculateArea3(shape: Shape3) {
    if (shape instanceof RectangleClass) {
        shape;
        return shape.width * shape.height;
    }

    shape;
    return shape.width * shape.width;
}

/** 타입연산은 런타임에 영향을 주지 않는다. */
function asNumber(val: number | string): number {
    return val as number; //string으로 넘어와도 타입체크 통과 (그냥 string을 return할 가능성)
}

function asNumber2(val: number | string): number {
    return typeof val === 'string' ? Number(val) : val;
}

/** 런타임 타입은 선언된 타입과 다를 수 있다. */
function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            //불켜기
            break;
        case false:
            //불끄기
            break;
        default:
            console.log('실행이 될까?');
    }
}
// 타입체커에서 오류가 나지않았고, js코드로 트랜스파일링 되면서 boolean속성이 사라지면서
// value = 'ON' 으로 들어올 상황이 생긴다. (아래 예시)

interface LightApiResponse {
    lightSwitchValue: boolean;
}
async function setLight() {
    const response = await fetch('/light');
    const result: LightApiResponse = await response.json();
    setLightSwitch(result.lightSwitchValue);
}
// response.json이 LightApiResponse의 타입으로 꼭 들어오리란 보장은 없다. (문자열로 들어올 수 있음.)

/** 타입스크립트 타입으로는 함수를 오버로드할 수 없다. (온전히 타입 수준에서만 동작)*/
function add5(a: number, b: number): number;
function add5(a: string, b: string): string;

function add5(a, b) {
    return a + b;
}

const three = add5(1, 2); //타입이 number
const eleven = add5('1', '1'); //타입이 string
