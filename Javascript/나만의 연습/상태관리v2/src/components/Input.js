import Component from '../core/Component.js';

export default class Input extends Component {
    template() {
        return /* html */ `
            <div>
                <input class="input" value="${this.props.typed}" />
            </div>
        `;
    }

    setEvent() {
        this.addEvent('change', '.input', event => {
            this.props.handleChange(event.target.value);
        });
    }
}
