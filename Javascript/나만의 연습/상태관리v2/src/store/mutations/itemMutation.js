export default {
    addItem: (state, item) => {
        state.items.push(item);
        return state;
    },
    deleteItem: function (state, index) {
        state.items.splice(index, 1);

        return state;
    },
};
