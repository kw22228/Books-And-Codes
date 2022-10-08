import Component from './core/Component.js';

export default class App extends Component {
    initState() {
        return {
            a: 10,
            b: 20,
        };
    }

    template() {
        const { a, b } = this._state;
        return /*html*/ `
            <input type="text" id="stateA" value="${a}" />
            <input type="text" id="stateB" value="${b}" />
            <p>a + b = ${a + b}</p>
        `;
    }

    setEvent() {
        this._element.querySelector('#stateA').addEventListener('change', e => {
            this._state.a = Number(e.target.value);
        });

        this._element.querySelector('#stateB').addEventListener('change', e => {
            this._state.b = Number(e.target.value);
        });
    }
}
