const xs = [1, 2, 3];
const x0 = xs[0];

const x1 = xs['1'];

const one: string = '1';
const xx1 = xs[one];

function get<T>(array: T[], k: string): T {
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

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
    if (i < xs.length) return xs[i];

    throw new Error(`배열의 끝을 지나서 ${i}를 접근하려고 했습니다.`);
}

const tupleLike: ArrayLike<string> = {
    0: 'a',
    '1': 'b',
    length: 2,
};
