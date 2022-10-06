import Items from './Items.js';

class App {
    constructor() {
        const root = document.querySelector('#root');
        new Items(root);
    }
}

new App();
