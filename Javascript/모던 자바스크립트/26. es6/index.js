const base = {
    name: 'Lee',
    sayHi() {
        return `Hi: ${this.name}`;
    },
};

const derived = {
    __proto__: base,
    name: 'Kim',
    sayHi() {
        return `${super.sayHi()}. how are you doing?`;
    },
};

console.log(derived.sayHi());
