import Component from './core/Component';

export default class App extends Component {
    onClickHandler;

    setup() {
        this.state = { items: ['item1', 'item2'] };
    }

    template() {
        const { items } = this.state;

        return /* html */ `
            <ul>
                ${items.map(item => /* html */ `<li>${item}</li>`).join('')}
            </ul>
            <button>추가</button>
        `;
    }

    setEvent() {
        if (!this.onClickHandler) this.onClickHandler = this.addItem.bind(this);
        const $addButton = this.$target.querySelector('button');
        $addButton.removeEventListener('click', this.onClickHandler);
        $addButton.addEventListener('click', this.onClickHandler);
    }

    addItem() {
        const { items } = this.state;
        this.setState({ items: [...items, `item${items.length + 1}`] });
    }
}
