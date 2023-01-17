"use strict";
const xs = [1, 2, 3];
const x0 = xs[0];
const x1 = xs['1'];
const one = '1';
const xx1 = xs[one];
function get(array, k) {
    return array[k];
}
const keys = Object.keys(xs);
for (const x in xs) {
    x;
    const xx = xs[x];
}
for (const x of xs) {
    x;
}
function checkedAccess(xs, i) {
    if (i < xs.length)
        return xs[i];
    throw new Error(`배열의 끝을 지나서 ${i}를 접근하려고 했습니다.`);
}
const tupleLike = {
    0: 'a',
    '1': 'b',
    length: 2,
};
