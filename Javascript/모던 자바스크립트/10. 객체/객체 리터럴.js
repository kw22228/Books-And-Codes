var person = {
    name: 'kim',
    sayHello: function () {
        console.log(`hello my name is ${this.name}`);
    },
};

console.log(typeof person);
console.log(person);
var circle = {
    radius: 5,

    getDiameter: function () {
        return 2 * this.radius;
    },
};

console.log(circle.getDiameter());
