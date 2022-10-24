// const person = {
//     name: 'kim',
//     address: 'seoul',
// };

// const obj = new Object();

const func = function (value, value2) {
    this.val = value;
    this.val2 = value2;
};

const f = new func('aaa', 'bbb');

console.dir(func);
console.dir(f);
// console.dir(person);
// console.dir(obj);

console.log('======================\n');

const obj = {};
const parent = { x: 1 };

// obj.__proto__ = parent;

Object.setPrototypeOf(obj, parent);
console.log(obj);
