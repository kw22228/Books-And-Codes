import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

/** createAction */
// const ADD = 'ADD';
// const REMOVE = 'REMOVE';

// const addTodo = createAction('ADD');
// const removeTodo = createAction('REMOVE');

// const r = addTodo({ title: '제목' });

/** createReducer */
const initialState = [{ id: Date.now(), text: 'go work' }];
// const todoReducer = createReducer(initailState, {
//     ADD: (state, action) => {
//         state.push({ id: Date.now(), text: action.payload.text });
//     },
//     REMOVE: (state, action) => {
//         state.filter(todo => todo.id !== action.payload.id);
//     },
// });

/** createSlice */
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push({ id: Date.now(), text: action.payload.text });
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload.id);
        },
    },
});

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        plus(state, action) {
            state.wallet = state.wallet + action.payload.wallet;
        },
    },
});

const { addTodo, removeTodo } = todoSlice.actions;

const todo = todoSlice.reducer;
const wallet = walletSlice.reducer;

const store = configureStore({ reducer: { todo, wallet } });

store.dispatch(addTodo({ text: 'aaa' }));
