class App extends Component {
    setup() {
        this._state = { items: ['item1', 'item2'] };
    }

    template() {
        const { items } = this._state;
        return /*html*/ `
            <ul>
                ${items.map(item => `<li>${item}</li>`)}
            </ul>
            <button>추가</button>
        `;
    }

    setEvent() {
        this._target.querySelector('button').addEventListener('click', () => {
            const { items } = this._state;
            this.setState({
                items: [...items, `items${items.length + 1}`],
            });
        });
    }
}
