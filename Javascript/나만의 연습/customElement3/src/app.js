import './components/Main/MainApp';

export default class App {
    $target;

    constructor(target) {
        this.$target = target;

        this.render();
    }

    getTemplate() {
        return /* html */ `
        <main-app></main-app>
        `;
    }

    render() {
        this.$target.innerHTML = this.getTemplate();
    }
}
