// /** 제네레이터 함수 선언문 */
// function* genDecFunc() {
//     yield 1;
// }

// /** 제네레이터 함수 표현식 */
// const genExpFunc = function* () {
//     yield 1;
// };

// /** 제네레이터 메서드 */
// const obj = {
//     *genObjMethod() {
//         yield 1;
//     },
// };

// /** 제네레이터 클래스 메서드 */
// class MyClass {
//     *genClsMethod() {
//         yield 1;
//     }
// }

// function* genFunc() {
//     try {
//         yield 1;
//         yield 2;
//         yield 3;
//     } catch (e) {
//         console.error(e);
//     }
// }

// const generator = genFunc();
// console.log(Symbol.iterator in generator);
// console.log('next' in generator);

// console.log(generator.next());
// // console.log(generator.return('End!'));
// // console.log(generator.throw('Error!!'));

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* genFunc2() {
//     const x = yield 1;

//     const y = yield x + 10;

//     return x + y; //return은 종료의 의미 {done: true, value: (x + y)}
// }

// const generator2 = genFunc2();

// let res = generator2.next();
// console.log(res);

// res = generator2.next(10);
// console.log(res);

// res = generator2.next(20);
// console.log(res);

// const infiniteFibonacciIterator = (function () {
//     let [pre, cur] = [0, 1];

//     return {
//         [Symbol.iterator]() {
//             return this;
//         },
//         next() {
//             [pre, cur] = [cur, pre + cur];
//             return { value: cur };
//         },
//     };
// })();
// for (const num of infiniteFibonacciIterator) {
//     if (num > 10000) break;
//     console.log(num);
// }

// const infiniteFibonacciGenerator = (function* () {
//     let [pre, cur] = [0, 1];

//     while (true) {
//         [pre, cur] = [cur, pre + cur];
//         yield cur;
//     }
// })();
// for (const num of infiniteFibonacciGenerator) {
//     if (num > 10000) break;
//     console.log(num);
// }

const generatorAsync = generatorFunc => {
    const generator = generatorFunc();

    const onResolved = arg => {
        const result = generator.next(arg);
        // console.log(result);

        return result.done ? result.value : result.value.then(res => onResolved(res));
    };

    return onResolved;
};
function* fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = yield fetch(url);
    const todo = yield response.json();

    console.log(todo);
}
const todo = generatorAsync(fetchTodo);
todo();
