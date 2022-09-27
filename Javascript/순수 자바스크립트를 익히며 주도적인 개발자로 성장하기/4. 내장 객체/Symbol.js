let person = {
    firstName: 'Kim',
    lastName: 'Jae won',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person.getFullName());

let getLastName = Symbol('getLastName');
person[getLastName] = function () {
    return this.lastName;
};

console.log(person[getLastName]());
console.log(person);
for (let p in person) {
    console.log(p);
}
