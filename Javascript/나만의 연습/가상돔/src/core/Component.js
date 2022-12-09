import diff from '../utils/diff';

export default class Component {
    $target;
    state;

    constructor(target) {
        this.$target = target;
        this.setup();
        this.render();
    }

    setup() {}
    template() {
        return '';
    }

    render() {
        const newNode = this.$target.cloneNode(true);
        newNode.innerHTML = this.template();

        const oldChildNodes = [...this.$target.childNodes];
        const newChildNodes = [...newNode.childNodes];
        const maxLength = Math.max(oldChildNodes.length, newChildNodes.length);
        for (let i = 0; i < maxLength; i++) {
            diff(this.$target, newChildNodes[i], oldChildNodes[i]);
        }

        this.setEvent();
    }

    setEvent() {}
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}
