import Component from '../core/Component.js';

export default class Mirror extends Component {
    template() {
        return /* html */ `
            <p>Typed: ${this.props.typed}</p>
        `;
    }
}
