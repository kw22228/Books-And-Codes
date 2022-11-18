import { observe } from '../observable';

export default class Component {
    #target;
    #props;

    constructor(target, props) {
        this.#target = document.querySelector(target);
        this.#props = props;

        this.setup();
        this.setEvent();

        observe(() => {
            this.render();
            this.mounted();
        });
    }

    setup() {}

    template() {
        return '';
    }

    render() {
        this.#target.innerHTML = this.template();
    }

    mounted() {}

    setEvent() {}

    addEvent(eventType, selector, callback) {
        const children = [...this.#target.querySelector(selector)];
        const isTarget = target => children.includes(target) || target.closest(selector);
        this.#target.addEventListener(eventType, e => {
            if (!isTarget(e.target)) return false;

            callback(e);
        });

        return this;
    }

    updated() {}
}
