export default class Component {
    _target;
    _state;

    constructor(target) {
        this._target = target;
        this.setDefault();

        this.setEvent();

        this.render();
    }

    setDefault() {}
    getTemplate() {}

    render() {
        this._target.innerHTML = this.getTemplate();
    }

    setEvent() {}

    setState(newState) {
        this._state = {
            ...this._state,
            ...newState,
        };

        this.render();
    }

    addEvent(eventType, selector, callback) {
        const children = [...this._target.querySelectorAll(selector)];

        const isTarget = target => children.includes(target) || target.closest(selector);

        this._target.addEventListener(eventType, e => {
            if (!isTarget(e.target)) return false;

            callback(e);
        });
    }
}
