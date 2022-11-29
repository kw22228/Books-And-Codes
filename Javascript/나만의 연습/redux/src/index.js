import { createStore } from 'redux';

const lightDiv = document.querySelector('.light');
const switchButton = document.querySelector('#switch-btn');

const counterHeadings = document.querySelector('h1');
const plusButton = document.querySelector('#plus-btn');
const minusButton = document.querySelector('#minus-btn');

// 1.액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 2. 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// 3. 초기값 설정
const initialState = {
    light: true,
    counter: 713,
};

// 4. 리듀서 함수 정의
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                light: !state.light,
            };
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.diff,
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return { ...state };
    }
}

// 5. 스토어 만들기
const store = createStore(reducer);

// 6. render 만들기
const render = () => {
    const state = store.getState();
    const { light, counter } = state;

    if (light) {
        lightDiv.style.background = 'green';
        switchButton.innerText = '끄기';
    } else {
        lightDiv.style.background = 'gray';
        switchButton.innerText = '켜기';
    }
    counterHeadings.innerText = counter;
};

render();

// 7. 구독하기
store.subscribe(render);

// 8. 이벤트, 디스패치 (액션 발생)
switchButton.onclick = () => {
    store.dispatch(toggleSwitch());
};

plusButton.onclick = () => {
    store.dispatch(increment(5));
};

minusButton.onclick = () => {
    store.dispatch(decrement());
};
