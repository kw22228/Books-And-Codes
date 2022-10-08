export default class Publish {
    #state;
    #ovservers = new Set();

    constructor(state) {
        this.#state = state;
        Object.keys(state).forEach(key => {
            Object.defineProperty(this, key, {
                get: () => this.#state[key],
            });
        });
    }

    // 상태 변화 (구독자에게 변화 알림)
    setState(newState) {
        this.#state = { ...this.#state, ...newState };

        this.notification();
    }

    //구독자 등록
    register(subscriber) {
        this.#ovservers.add(subscriber);
    }

    //구독자에게 알림
    notification() {
        this.#ovservers.forEach(fn => fn());
    }
}
