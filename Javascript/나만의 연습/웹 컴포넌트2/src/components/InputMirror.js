import Component from '../core/Component.js';
import Input from './Input.js';
import Mirror from './Mirror.js';
import store from '../store';

export default class InputMirror extends Component {
    setup() {
        store.dispatch('ADD_ITEM', '');
    }

    template() {
        return /* html */ `
            <div>
                <div class="input-container"></div>
                <div class="mirror-container"></div>
            </div>
        `;
    }

    mounted() {
        new Input('.input-container');
        new Mirror('.mirror-container');
    }

    handleChange(value) {
        this.setState({ typed: value });
    }
}
