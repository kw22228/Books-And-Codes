import Component from '../core/Component.js';

export default class ItemFilter extends Component {
    getTemplate() {
        return /*html*/ `
            <button class="filterBtn" data-is-filter="0">전체</button>
            <button class="filterBtn" data-is-filter="1">활성</button>
            <button class="filterBtn" data-is-filter="2">비활성</button>
        `;
    }

    setEvent() {
        const { filterItem } = this._props;

        this.addEvent('click', '.filterBtn', e => {
            const isFilter = Number(e.target.dataset.isFilter);

            filterItem(isFilter);
        });
    }
}
