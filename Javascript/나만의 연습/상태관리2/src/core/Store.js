export default class Store {
    #state;
    #actions;

    state = {};

    constructor({ state, actions }) {
        this.#state = state;
        this.#actions = actions;

        Object.keys(state).forEach(key => {
            Object.defineProperty(this.state, key, {
                get() {
                    return this.#state[key];
                },
            });
        });
    }
    commit(action, payload) {
        this.#actions[action](this.#state, payload);
    }
}
