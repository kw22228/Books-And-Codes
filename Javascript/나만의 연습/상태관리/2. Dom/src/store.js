import { observable } from './core/observer.js';

// export const store = {
//     state: observable({
//         a: 10,
//         b: 20,
//     }),

//     setState(newState) {
//         for (const [key, value] of Object.entries(newState)) {
//             if (!this.state[key]) continue;
//             this.state[key] = value;
//         }
//     },
// };

export const createStore = reducer => {
    const state = observable(reducer());

    const frozenState = {};
    Object.keys(state).forEach(key => {
        Object.defineProperty(frozenState, key, {
            get: () => state[key],
        });
    });

    const dispatch = action => {
        const newState = reducer(state, action);

        for (const [key, value] of Object.entries(newState)) {
            if (!state[key]) continue;
            state[key] = value;
        }
    };
};
