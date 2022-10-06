import Component from '../core/Component.js';

export default class Items extends Component {
    get filteredItems() {
        const { isFilter, items } = this._state;

        return items.filter(
            ({ active }) =>
                (isFilter === 1 && active) || (isFilter === 2 && !active) || isFilter === 0
        );
    }

    setDefault() {
        this._state = {
            isFilter: 0,
            items: [
                {
                    seq: 1,
                    contents: 'item1',
                    active: false,
                },
                {
                    seq: 2,
                    contents: 'item2',
                    active: true,
                },
            ],
        };
    }

    getTemplate() {
        return /*html*/ `
            <header>
                <input type="text" class="appender" placeholder="아이템 내용 입력" />
            </header>
            <main>
                <ul>
                    ${this.filteredItems
                        .map(
                            ({ seq, contents, active }) => /*html*/ `
                        <li data-seq="${seq}">
                            ${contents}
                            <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
                                ${active ? '활성' : '비활성'}
                            </button>
                            <button class="deleteBtn">삭제</button>
                        </li>
                    `
                        )
                        .join('')}
                </ul>
            </main>
            <footer>
                <button class="filterBtn" data-is-filter="0">전체 보기</button>
                <button class="filterBtn" data-is-filter="1">활성 보기</button>
                <button class="filterBtn" data-is-filter="2">비활성 보기</button>
            </footer>
        `;
    }

    setEvent() {
        this.addEvent('keyup', '.appender', e => {
            if (e.key !== 'Enter') return;

            const { items } = this._state;
        });

        // this._target.querySelector('#add').addEventListener('click', () => {
        //     const { items } = this._state;

        //     this.setState({
        //         items: [...items, `item${items.length + 1}`],
        //     });
        // });

        // this._target.querySelectorAll('.delete').forEach(btn => {
        //     btn.addEventListener('click', e => {
        //         const idx = e.target.dataset.idx;
        //         const items = [...this._state.items];

        //         items.splice(idx, 1);

        //         this.setState({
        //             items,
        //         });
        //     });
        // });

        // this._target.addEventListener('click', ({ target }) => {
        //     const items = [...this._state.items];

        //     if (target.classList.contains('add')) {
        //         this.setState({ items: [...items, `item${items.length + 1}`] });
        //     }

        //     if (target.classList.contains('delete')) {
        //         items.splice(target.dataset.index, 1);
        //         this.setState({ items });
        //     }
        // });

        // this.addEvent('click', '.add', e => {
        //     const { items } = this._state;

        //     this.setState({
        //         items: [...items, `item${items.length + 1}`],
        //     });
        // });

        // this.addEvent('click', '.delete', e => {
        //     const idx = e.target.dataset.idx;
        //     const items = [...this._state.items];

        //     items.splice(idx, 1);

        //     this.setState({
        //         items,
        //     });
        // });
    }
}
