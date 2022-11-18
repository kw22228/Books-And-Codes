// let target = {};
// let proxy = new Proxy(target, {});

// proxy.test = 5;
// target.num = 10;
// console.log(target);
// console.log(proxy);

// for (const key in proxy) console.log(proxy[key]);

// const numbers = [0, 1, 2];

// const proxy = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return -1;
//         }
//     },
//     set(target, prop, value) {
//         console.log(target, prop, value);
//     },
// });

// console.log(proxy[12]);

// let dictionary = {
//     hello: '안녕하세요',
//     Bye: '안녕히 가세요',
// };

// dictionary = new Proxy(dictionary, {
//     get(target, prop, receiver) {
//         if (prop in target) return target[prop];

//         return prop;
//     },
// });

// console.log(dictionary.hello);

// const numbers = new Proxy([], {
//     set(target, prop, value) {
//         if (typeof value === 'number') {
//             target[prop] = value;
//             return true;
//         }

//         return false;
//     },
// });

// numbers.push(12);
// numbers.push('123');

// console.log(numbers);

// let user = {
//     name: 'John',
//     age: 30,
//     _password: '***',
// };

// user = new Proxy(user, {
//     ownKeys(target) {
//         // return Object.keys(target).filter(key => !key.startsWith('_'));
//         return ['a', 'b', 'c'];
//     },

//     //모든 프로퍼티를 대상으로 호출
//     getOwnPropertyDescriptor(target, prop) {
//         return {
//             enumerable: true,
//             configurable: true,
//         };
//     },
// });

// for (const x in user) {
//     console.log(x);
// }

let user = {
    name: 'John',
    _password: '***',
    getPassword(value) {
        console.log(this);
        return this._password;
    },
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) throw new Error('접근이 제한되어있습니다.');

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
    },
    set(target, prop, value) {
        if (prop.startsWith('_')) throw new Error('접근이 제한되어있습니다.');

        target[prop] = value;
        return true;
    },
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) throw new Error('접근이 제한되어있습니다.');

        delete target[prop];
        return true;
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    },
});

try {
    // console.log(user._name);
    // user._password = '123123';
    // delete user._password;
    for (const key in user) {
        if (typeof user[key] === 'function') console.log(user[key]());
    }
} catch (e) {
    console.log(e);
}

console.log('---------------- has trap ---------------');

const range = new Proxy(
    { start: 1, end: 10 },
    {
        has(target, prop) {
            return prop >= target.start && prop <= target.end;
        },
    }
);

console.log(5 in range);
console.log(11 in range);

console.log('---------------- apply trap ---------------');

// const delay =
//     (f, ms) =>
//     (...args) =>
//         setTimeout(() => {
//             f.apply(this, args);
//         }, ms);

// sayHi('John');

function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        },
    });
}

const sayHi = delay(user => console.log(user), 3000);
console.log(sayHi.length);
// sayHi('John');

console.log('---------------- Reflect ---------------');

const user1 = {
    age: 30,
};
Reflect.set(user1, 'name', 'John');
console.log(user1);

console.log('---------------- Solution ---------------');

// let u = {
//     name: 'John',
// };

// function wrap(target) {
//     return new Proxy(target, {
//         get(target, prop) {
//             if (!target[prop]) throw new Error(`ReferenceError: Property doesn't exist "${prop}"`);

//             return target[prop];
//         },
//     });
// }

// u = wrap(u);

// console.log(u.name);
// console.log(u.age);

const handlers = Symbol('handlers');
function makeObservable(target) {
    target[handlers] = [];

    target.observe = function (handler) {
        this[handlers].push(handler);
    };

    return new Proxy(target, {
        set(target, prop, value, receiver) {
            const success = Reflect.set(target, prop, value, receiver);
            if (success) {
                target[handlers].forEach(handler => handler(prop, value));
            }
            return true;
        },
    });
}
const ob = makeObservable({});

ob.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});
ob.name = 'John';
ob.age = 30;
