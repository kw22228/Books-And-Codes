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

if (!Array.prototype.customMap) {
    Array.prototype.customMap = function (callback) {
        const list = [];
        for (let i = 0; i < this.length; i++) {
            list.push(callback(this[i]));
        }
        return list;
    };
}

const mapArr = arr.customMap(a => a + 10);
console.log(mapArr);
