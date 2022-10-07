import Component from './core/Component.js';
import Items from './components/Items.js';
import ItemAdd from './components/ItemAdd.js';
import ItemFilter from './components/ItemFilter.js';

export default class App extends Component {
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
            <header data-component="item-add"></header>
            <main data-component="items"></main>
            <footer data-component="item-filter"></footer>
        `;
    }

    mounted() {
        const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
        const itemAdd = this._target.querySelector('[data-component="item-add"]');
        const items = this._target.querySelector('[data-component="items"]');
        const itemFilter = this._target.querySelector('[data-component="item-filter"]');

        new ItemAdd(itemAdd, { addItem: addItem.bind(this) });
        new Items(items, {
            filteredItems,
            deleteItem: deleteItem.bind(this),
            toggleItem: toggleItem.bind(this),
        });
        new ItemFilter(itemFilter, { filterItem: filterItem.bind(this) });
    }

    get filteredItems() {
        const { isFilter, items } = this._state;

        return items.filter(
            ({ active }) =>
                (isFilter === 1 && active) || (isFilter === 2 && !active) || isFilter === 0
        );
    }

    addItem(contents) {
        const { items } = this._state;
        const seq = Math.max(0, ...items.map(item => item.seq)) + 1;
        const active = false;

        this.setState({
            items: [...items, { seq, contents, active }],
        });
    }

    deleteItem(seq) {
        const items = [...this._state.items];
        const fItems = items.filter(item => seq !== item.seq);

        this.setState({ items: fItems });
    }

    toggleItem(seq) {
        const items = [...this._state.items];
        const index = items.findIndex(item => seq === item.seq);

        items[index].active = !items[index].active;

        this.setState({ items });
    }

    filterItem(isFilter) {
        this.setState({ isFilter });
    }
}
