import Component from '../core/Component.js';
import store from '../store';

export default class Mirror extends Component {
    template() {
        return /* html */ `
            <p>Typed: ${store.getState().typed}</p>
        `;
    }
}
