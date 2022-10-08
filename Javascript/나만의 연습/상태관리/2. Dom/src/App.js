import Component from './core/Component.js';
import { store } from './store.js';

export default class App extends Component {
    template() {
        const { a, b } = store.state;
        return /*html*/ `
            <input type="text" id="stateA" value="${a}" />
            <input type="text" id="stateB" value="${b}" />
            <p>a + b = ${a + b}</p>
        `;
    }

    setEvent() {
        const { _element } = this;
        _element.querySelector('#stateA').addEventListener('change', e => {
            store.state.a = Number(e.target.value);
        });

        _element.querySelector('#stateB').addEventListener('change', e => {
            store.state.b = Number(e.target.value);
        });
    }
}
