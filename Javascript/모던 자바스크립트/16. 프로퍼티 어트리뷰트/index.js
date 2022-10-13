// const person = {
//     firstName: 'Jaewon',
//     lastName: 'Kim',

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     },
// };
// person.age = 20;

// // console.log(Object.getOwnPropertyDescriptors(person));

// console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));

// console.log(person.fullName);
// person.fullName = 'heesung Lee';
// console.log(person.fullName);

const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'jaewon',
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, 'lastName', {
    value: 'Kim',
});

//Object.defineProperty의 속성들은 기본값이 false
console.log(Object.getOwnPropertyDescriptors(person));

for (let x in person) {
    console.log(x); //lastName 나오지않음 (enumerable: false)
}

console.log(person.lastName);
person.lastName = 'Lee';
console.log(person.lastName); //바뀌지않음.

delete person.lastName;
delete person.firstName;
console.log(Object.getOwnPropertyDescriptors(person)); //firstName은 삭제되었는데 lastName은 그대로있음

// 접근자 프로퍼티
Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
});

console.log(Object.getOwnPropertyDescriptors(person));

person.fullName = 'yoojung oh';
console.log(person.fullName);

/////////////////////////////////////////
const fruit = {};

Object.defineProperties(fruit, {
    apple: {
        value: 'apple',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    banana: {
        value: 'banana',
    },

    title: {
        get() {
            return 'fruit store!!';
        },

        set(name) {
            this.apple = name;
        },
    },
});

console.log(fruit.title);
fruit.title = 'apple2';
console.log(fruit.apple);
