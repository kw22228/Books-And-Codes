import Component from '../core/Component.js';

export default class ItemAdd extends Component {
    getTemplate() {
        return /*html*/ `
            <input type="text" class="addInput" placeholder="아이템 내용 입력" />
        `;
    }

    setEvent() {
        const { addItem } = this._props;

        this.addEvent('keyup', `.addInput`, e => {
            if (e.key !== 'Enter') return;

            addItem(e.target.value);
        });
    }
}
