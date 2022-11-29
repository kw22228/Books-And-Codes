export default {
    ADD_ITEM: (context, params) => {
        context.commit('addItem', params);
    },
    // DELETE_ITEM: (context, params) => {
    //     context.commit('deleteItem', params);
    // },
};
