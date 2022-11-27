import Mediator from './mediator';

export default class Store {
    #actions;
    #mutations;
    #status;
    #events;
    state;

    constructor(state, actions, mutations) {
        this.#actions = actions || {}; // 액션 담을 공간
        this.#mutations = mutations || {}; // Mutation을 담을 공간
        this.#status = 'resting'; // Store의 현재 상태
        this.#events = new Mediator(); // 구독한 컴포넌트들에게 state가 업데이트될때 등록된 event를 알림

        this.state = new Proxy(state || {}, {
            get: (target, prop) => {
                return target[prop] ?? null;
            },
            set: (target, prop, value) => {
                target[prop] = value;

                //해당 state에 연결된 화면 render필요
                console.log(`stateChange: ${prop}: ${value}`);

                this.#events.publish('stateChange', this.state);
                this.#status = 'resting';

                return true;
            },
        });
    }

    getInstance() {
        return this;
    }

    dispatch(actionKey, params) {
        if (!this.#actions.hasOwnProperty(actionKey)) {
            console.error(`ActionKey ${actionKey} does not exist.`);
            return false;
        }

        this.#status = 'action';
        return this.#actions[actionKey](this, params);
    }

    commit(mutationKey, params) {
        if (!this.#mutations.hasOwnProperty(mutationKey)) {
            console.error(`MutationKey ${mutationKey} does not exist.`);
            return false;
        }

        this.#status = 'mutation';
        const newState = this.#mutations[mutationKey](this.state, params);

        this.state = [...this.state, ...newState];

        return true;
    }
}
