"use strict";
/** 타입오류가 있는 코드도 컴파일 가능. */
let hello = 'hello';
hello = 1234; //string -> number 타입오류
function calculateArea(shape) {
    //   런타임시에는 값으로 취급
    //   if (shape instanceof Rectangle) {
    //     return shape.width * shape.height; // shape는 Square일수도 Rectangle일수도
    //   } else {
    //     return shape.width * shape.width;
    //   }
    //shape에 'height'라는 props가있으면
    if ('height' in shape) {
        shape;
        return shape.width * shape.height;
    }
    else {
        shape;
        return shape.width * shape.width;
    }
}
function calculateArea2(shape) {
    if (shape.kind === 'rectangle') {
        shape;
        return shape.width * shape.height;
    }
    shape;
    return shape.width * shape.width;
}
const shape = {
    kind: 'square',
    width: 80,
};
calculateArea2(shape);
////////////////////////// 클래스 (값으로도 타입으로도 사용가능)
class SquareClass {
    constructor(width) {
        this.width = width;
    }
}
class RectangleClass extends SquareClass {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
function calculateArea3(shape) {
    if (shape instanceof RectangleClass) {
        shape;
        return shape.width * shape.height;
    }
    shape;
    return shape.width * shape.width;
}
/** 타입연산은 런타임에 영향을 주지 않는다. */
function asNumber(val) {
    return val; //string으로 넘어와도 타입체크 통과 (그냥 string을 return할 가능성)
}
function asNumber2(val) {
    return typeof val === 'string' ? Number(val) : val;
}
/** 런타임 타입은 선언된 타입과 다를 수 있다. */
function setLightSwitch(value) {
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
async function setLight() {
    const response = await fetch('/light');
    const result = await response.json();
    setLightSwitch(result.lightSwitchValue);
}
function add5(a, b) {
    return a + b;
}
const three = add5(1, 2); //타입이 number
const eleven = add5('1', '1'); //타입이 string
