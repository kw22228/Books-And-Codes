const isIterable = v => {
    return v !== null && typeof v[Symbol.iterator] === 'function';
};

console.log(isIterable([])); // Array.prototype[Symbol.iterabor]의 상속
console.log(isIterable(''));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));

const arr = [1, 2, 3];

console.log(Symbol.iterator in arr);

for (const item of arr) {
    console.log(item);
}

console.log([...arr]);

const [a, ...rest] = arr;

console.log(a, rest);

const obj = { a: 1, b: 2 };
console.log({ ...obj });

const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); //이터레이터 리절트 객체
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const arrayList = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
};

//피보나치
const fibonacci = function (max) {
    let [pre, cur] = [0, 1];
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];

                    return { value: cur, done: cur >= max };
                },
            };
        },
    };
};

for (const num of fibonacci(100)) {
    console.log(num);
}

const fibonacciIterable = fibonacci(5);
const fibonacciIterator = fibonacciIterable[Symbol.iterator]();
console.log(fibonacciIterator.next());
console.log(fibonacciIterator.next());
console.log(fibonacciIterator.next());
console.log(fibonacciIterator.next());

// 무한 이터러블 피보나치
const infiniteFibonacci = function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];

            return {
                value: cur,
            };
        },
    };
};

// const infiniteFibonacciIterable = infiniteFibonacci();
// const infiniteFibonacciIterator = infiniteFibonacciIterable[Symbol.iterator]();

for (const num of infiniteFibonacci()) {
    if (num > 1000) break;
    console.log(num);
}
