import './components/CurrentTime';
import CurrentTime2 from './components/CurrentTime2';

export default class App {
    #target;

    constructor(target) {
        this.#target = target;

        this.render();
        // this.setEvent();
    }

    template() {
        return /* html */ `
            <current-time locale="en">${new Date().toLocaleString('en')}</current-time>
            <div class="current-time2"></div>
        `;
    }

    render() {
        this.#target.innerHTML = this.template();
    }

    setEvent() {
        this.#target.querySelectorAll('.current-time2').forEach(el => {
            CurrentTime2.create(el);
        });
    }
}
