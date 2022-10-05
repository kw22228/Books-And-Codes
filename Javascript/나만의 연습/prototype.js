// let obj = {};
// // console.log(obj.toString());

// Object.prototype.toString = function () {
//     return this;
// };
// console.log(obj.toString());

const arr = [1, 2, 3];
// console.log(arr.__proto__);
// console.log(Array.prototype);
// arr.__proto__ = Array.prototype

// console.dir(arr);

// if (!Array.prototype.customMap) {
//     Array.prototype.customMap = function (callback) {
//         const list = [];
//         for (let i = 0; i < this.length; i++) {
//             list.push(callback(this[i]));
//         }
//         return list;
//     };
// }

// const mapArr = arr.customMap(a => a + 10);
// console.log(mapArr);

let animal = {
    name: '동물',
    eat() {
        console.log(`${this.name} 먹이를 먹습니다.`);
    },
};

let rabbit = {
    __proto__: animal,
    // name: '토끼',
    eat() {
        super.eat();
    },
};

let longEar = {
    __proto__: rabbit,
    // name: '귀가 긴 토끼',
    eat() {
        super.eat();
    },
};
// rabbit.eat();

longEar.eat();
