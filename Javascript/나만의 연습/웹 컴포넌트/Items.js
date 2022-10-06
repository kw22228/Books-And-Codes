import Component from './Component.js';

export default class Items extends Component {
    setDefault() {
        this._state = {
            items: ['item1', 'item2'],
        };
    }

    getTemplate() {
        const { items } = this._state;

        return /*html*/ `
            <ul>
                ${items
                    .map(
                        (item, index) => /*html*/ `
                    <li>${item}<button class="delete" data-idx=${index}>삭제</button></li>
                    
                    `
                    )
                    .join('')}
            </ul>
            <button class="add">추가</button>
        `;
    }

    setEvent() {
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

        this.addEvent('click', '.add', e => {
            const { items } = this._state;

            this.setState({
                items: [...items, `item${items.length + 1}`],
            });
        });

        this.addEvent('click', '.delete', e => {
            const idx = e.target.dataset.idx;
            const items = [...this._state.items];

            items.splice(idx, 1);

            this.setState({
                items,
            });
        });
    }
}
