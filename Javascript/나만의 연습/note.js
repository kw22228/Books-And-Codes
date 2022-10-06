let component = {
    target: 'aaa',
};

let app = {
    __proto__: component,
    target: 'bbb',
    setup() {
        console.log('child setup');
    },
};
