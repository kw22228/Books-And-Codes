import Component from '../core/Component.js';
import Input from './Input.js';
import Mirror from './Mirror.js';

export default class InputMirror extends Component {
    setup() {
        this.state = { typed: '' };
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
        new Input('.input-container', {
            typed: this.state.typed,
            handleChange: this.handleChange.bind(this),
        });
        new Mirror('.mirror-container', {
            typed: this.state.typed,
        });
    }

    handleChange(value) {
        this.setState({ typed: value });
    }
}
