import Component from '../core/Component.js';

export default class Items extends Component {
    getTemplate() {
        const { filteredItems } = this._props;

        return /*html*/ `
            <ul>
                ${filteredItems
                    .map(
                        ({ seq, contents, active }) => /*html*/ `
                    <li data-seq="${seq}">
                        ${contents}

                        <button class="toggelBtn" style="color: ${active ? '#09F' : '#F09'}">
                            ${active ? '활성' : '비활성'}
                        </button>
                        <button class="deleteBtn">삭제</button>
                    </li>
                `
                    )
                    .join('')}
            </ul>
        `;
    }

    setEvent() {
        const { deleteItem, toggleItem } = this._props;

        //토글
        this.addEvent('click', '.toggelBtn', e => {
            const seq = Number(e.target.closest('[data-seq]').dataset.seq);

            toggleItem(seq);
        });

        //삭제
        this.addEvent('click', '.deleteBtn', e => {
            const seq = Number(e.target.closest('[data-seq]').dataset.seq);

            deleteItem(seq);
        });
    }
}
