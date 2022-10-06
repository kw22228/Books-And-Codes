import Items from './components/Items.js';

class App {
    constructor() {
        const root = document.querySelector('#root');
        new Items(root);
    }
}

new App();
