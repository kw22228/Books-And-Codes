export default class Component {
    _target;
    _state;
    _props;

    constructor(target, props) {
        this._target = target;
        this._props = props || null;

        this.setDefault();
        this.setEvent();
        this.render();
    }

    setDefault() {}
    mounted() {}
    getTemplate() {}

    render() {
        this._target.innerHTML = this.getTemplate();
        this.mounted();
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
