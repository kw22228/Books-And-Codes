import Mediator from './mediator';

export default class Store {
    constructor(state = {}, actions, mutations) {
        this.actions = actions;
        this.mutations = mutations;
        this.status = 'resting';
        this.events = new Mediator();
        this.state = new Proxy(state, {
            get: (state, key, receiver) => {
                return state[key] ?? null;
            },
            set: (state, key, value) => {
                state[key] = value;

                this.events.publish('stateChange', state);
                return true;
            },
        });
    }

    dispatch(actionKey, params) {
        if (!this.actions.hasOwnProperty(actionKey)) {
            console.error(`Action ${actionKey} does not exist!`);
            return false;
        }
        this.status = 'action';
        this.actions[actionKey](this, params);
        return true;
    }

    commit(mutationKey, params) {
        if (!this.mutations.hasOwnProperty(mutationKey)) {
            console.error(`MutationKey ${mutationKey} does not exist!`);
            return false;
        }

        this.status = 'mutation';
        this.mutations[mutationKey](this.state, params);

        return true;
    }

    getState() {
        return this.state;
    }
}
