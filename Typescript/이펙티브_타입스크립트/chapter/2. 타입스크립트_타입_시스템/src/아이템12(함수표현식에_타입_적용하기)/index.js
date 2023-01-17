"use strict";
/** 함수 선언식과 함수 표현식 */
function rollDice1(slides) {
    return slides;
}
const rolDice2 = function (slides) {
    return slides;
};
const rolDice3 = (slides) => {
    return slides;
};
const rolDice = slides => {
    return slides;
};
/** 함수 표현식 타입 선언의 장점 */
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
const addFn = (a, b) => a + b;
const subFn = (a, b) => a + b;
const mulFn = (a, b) => a + b;
const divFn = (a, b) => a + b;
/** Fetch Api에서의 타입 */
const responseP = fetch('/quote?by=Mark+Twain'); // 타입은 Promise<Response>
async function getQuote() {
    const response = await fetch('/quote?by=Mark+Twain');
    const quote = await response.json();
    return quote;
}
/** Fetch의 reject 처리 */
// declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>; //기존 fetch타입
async function checkedFetch(input, init) {
    const response = await fetch(input, init);
    if (!response.ok) {
        //비동기 함수 내에서 거절된 프로미스로 변환.
        throw new Error('Request failed ' + response.status);
    }
    return response;
}
// typeof fetch로 input과 init의 타입과 반환타입을 추론할 수 있게 해줌.
const checkedFetch2 = async (input, init) => {
    const response = await fetch(input, init);
    if (!response.ok) {
        const error = new Error('Request failed ' + response.status);
        throw error;
        // return error; // Error타입은 fetch의 반환값인 Promise<Response>타입에 맞지않음.
    }
    return response;
};
