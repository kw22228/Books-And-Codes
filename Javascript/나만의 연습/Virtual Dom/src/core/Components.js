class Component {
    _target;
    _state;

    constructor(target) {
        this._target = target;
    }

    setup() {}
    template() {
        return '';
    }

    render() {
        const { _target } = this;

        const newNode = _target.cloneNode(true);
        newNode.innerHTML = this.template();

        const oldChildNodes = [..._target.childNodes];
        const newChildNodes = [...newNode.childNodes];
        const max = Math.max(oldChildNodes.length, newChildNodes.length);
        for (let i = 0; i < max; i++) {
            updateElement(_target, newChildNodes[i], oldChildNodes[i]);
        }

        this.setEvnet();
    }

    setEvnet() {}
    setState(newSate) {
        this._state = { ...this._state, ...newSate };
        this.render();
    }
}
