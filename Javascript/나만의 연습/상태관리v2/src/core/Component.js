export default class Component {
    #target;
    #props;
    #state;

    constructor(target, props = {}) {
        this.#target = document.querySelector(target);
        this.#props = props;

        this.setup();
        this.setEvent();
        this.render();
        this.mounted();
    }

    get target() {
        return this.#target;
    }

    get props() {
        return this.#props;
    }

    get state() {
        return this.#state;
    }

    set state(defaultState) {
        this.#state = defaultState;
    }

    //state를 초기화
    setup() {}

    template() {
        return '';
    }

    //html 렌더링
    render() {
        this.#target.innerHTML = this.template();
    }

    //componentDidMount => 렌더링후에 작업할 내용
    mounted() {}

    //state변경 -> render()까지
    setState(newState) {
        // let needRender = true;
        // Object.keys(newState).forEach(key => {
        //     if (this.#state[key] === newState[key]) needRender = false;
        // });

        // if (!needRender) return;

        this.#state = { ...this.#state, ...newState };

        this.render();
        this.mounted();
        this.updated();
    }

    setEvent() {}

    addEvent(eventType, selector, callback) {
        const children = [...this.#target.querySelectorAll(selector)];

        const isTarget = target => children.includes(target) || target.closest(selector);

        this.#target.addEventListener(eventType, e => {
            if (!isTarget(e.target)) return false;

            callback(e);
        });

        return this;
    }

    //componentDidUpdated => 무엇인가 갱신이 일어날때.
    updated() {}
}
