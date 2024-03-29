"use strict";
function arraySum(arr) {
    let sum = 0;
    let num;
    //arr의 원본에 pop을 해버림 (문제)
    while ((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}
function arraySumReadonly(arr) {
    let sum = 0;
    let num;
    //arr의 원본에 pop을 해버림 (문제)
    while ((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}
function printTriangles(n) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums));
    }
}
/** number[] 는 readonly number[]의 서브타입 */
const aa1 = [1, 2, 3];
const bb1 = a;
const cc1 = bb1; //readonly타입을 변경가능한 타입에 넣을수 없다.
const dd1 = aa1; //반대 가능
function parseTaggedText(lines) {
    // const paragraphs: string[][] = [];
    const paragraphs = []; // string[] 까지만 readonly
    let currPara = [];
    const addParagraph = () => {
        if (currPara.length) {
            // paragraphs.push(currPara);
            paragraphs.push([...currPara]);
            // currPara.length = 0;
            currPara = [];
        }
    };
    for (const line of lines) {
        if (!line)
            addParagraph();
        else {
            // currPara.push(line);
            currPara = currPara.concat([line]);
        }
    }
    addParagraph();
    return paragraphs;
}
/** readonly는 얕게 동작한다. */
const dates = [new Date()];
dates.push(new Date());
dates[0].setFullYear(2037);
const oo1 = { inner: { x: 0 } };
oo1.inner = { x: 1 }; //얕게 동작.
oo1.inner.x = 1; // 정상 깊은곳은 동작 x
let obj3 = {};
obj3.hi = 45;
obj3 = { ...obj3, hi: 12 };
obj3 = { ...obj3, bye: 34 };
