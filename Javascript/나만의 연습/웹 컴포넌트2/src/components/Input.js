import Component from '../core/Component.js';
import store from '../store';

export default class Input extends Component {
    template() {
        return /* html */ `
            <div>
                <input class="input" value="${store.getState().typed}" />
            </div>
        `;
    }

    setEvent() {
        this.addEvent('change', '.input', ({ target }) => {
            store.dispatch('ADD_ITEM', target.value);
            console.log(store.getState());
        });
    }
}
