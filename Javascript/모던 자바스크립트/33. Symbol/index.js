const key = 'mySymbol';

const s1 = Symbol.for(key);
const s2 = Symbol(key);

console.log(s1 === s2);

const s3 = Symbol.for(key);

console.log(s1 === s3);

console.log(Symbol.keyFor(s1), Symbol.keyFor(s2));

///////  symbol iterator

const iterable = {
    // Symbol.iterator 메서드를 구현하여 프로토콜 준수
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;

        //Symbol.iterator 메서드는 next메서드를 소유한 이터레이터를 반환.
        return {
            next() {
                return { value: cur++, done: cur > max + 1 };
            },
        };
    },
};

for (const num of iterable) {
    console.log(num);
}
