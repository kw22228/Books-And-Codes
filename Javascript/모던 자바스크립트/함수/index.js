// function foo() {
//     if (new.target) {
//         console.log('constructor');
//     } else {
//         console.log('callable');
//     }
// }

// foo();
// new foo();

// function Circle(radius) {
//     if (!new.target) {
//         return new Circle(radius);
//     }

//     this.radius = radius;

//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// const circle = Circle(5);

// console.log(circle.getDiameter());

// function multiply(x, y, ...args) {
//     console.log(args);
// }

// multiply(3, 2, 5, 6);

function foo(func) {
    return func();
}

function bar() {
    return 'caller: ' + bar.caller;
}

console.log(foo(bar));
console.log(bar());
