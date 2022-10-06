let state = {
    items: ['item1', 'item2', 'item3', 'item4'],
};

const render = () => {
    const { items } = state;

    root.innerHTML = /*html*/ `
    <ul>
        ${items.map(item => /*html*/ `<li>${item}</li>`).join('')}
    </ul>
    <button id="add">추가</button>
    `;

    document.querySelector('#add').addEventListener('click', () => {
        setState({
            items: [...items, `item${items.length + 1}`],
        });
    });
};

const setState = newState => {
    state = {
        ...state,
        ...newState,
    };

    render();
};

render();
