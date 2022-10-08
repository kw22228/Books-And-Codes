// let a = 10;
// const state = {};

// Object.defineProperty(state, '_a', {
//     get() {
//         console.log(`현재 a의 값은 ${a} 입니다.`);
//         return a;
//     },

//     set(value) {
//         a = value;
//         console.log(`변경된 a의 값은 ${a} 입니다.`);
//     },
// });

// console.log(`state.a = ${state._a}`);
// state._a = 100;
// console.log(a);

//////////////////////////////////////////////////////////////////

// let currentObserver = null;
// const state = {
//     a: 10,
//     b: 20,
// };

// const stateKeys = Object.keys(state);

// for (const key of stateKeys) {
//     let _value = state[key];
//     const observers = new Set();

//     Object.defineProperty(state, key, {
//         get() {
//             if (currentObserver) observers.add(currentObserver);
//             return _value;
//         },

//         set(value) {
//             _value = value;
//             observers.forEach(observer => observer());
//         },
//     });
// }

// const plusCalc = () => {
//     currentObserver = plusCalc;
//     console.log(`a + b = ${state.a + state.b}`);
// };
// const minusCalc = () => {
//     currentObserver = minusCalc;
//     console.log(`a - b = ${state.a - state.b}`);
// };

// plusCalc();
// minusCalc();

// state.a = 100;
// state.b = 200;

///////////////////////////////////////////////////////////

let currentObserver = null;

const observe = fn => {
    currentObserver = fn;
    fn();
    currentObserver = null;
};

const observable = obj => {
    Object.keys(obj).forEach(key => {
        let _value = obj[key];
        const observers = new Set();

        Object.defineProperty(obj, key, {
            get() {
                if (currentObserver) observers.add(currentObserver);
                return _value;
            },

            set(value) {
                _value = value;
                observers.forEach(fn => fn());
            },
        });
    });

    return obj;
};

const state = observable({
    a: 10,
    b: 20,
});

observe(() => console.log(`a = ${state.a}`));
observe(() => console.log(`b = ${state.b}`));

observe(() => console.log(`a + b = ${state.a + state.b}`));

console.log('=========================');
state.a = 100;
state.b = 200;
