import { observable, observe } from './observer.js';

export default class Component {
    _state;
    _props;
    _element;

    constructor(element, props) {
        this._element = element;
        this._props = props;

        this.setup();
    }

    setup() {
        // this._state = observable(this.initState()); //state 관찰
        observe(() => {
            this.render();
            this.setEvent();
            this.mounted();
        });
    }

    initState() {
        return {};
    }
    template() {
        return '';
    }
    render() {
        this._element.innerHTML = this.template();
    }
    setEvent() {}
    mounted() {}
}
