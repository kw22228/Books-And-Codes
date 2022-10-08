import Publish from './Publish';
import Subscriber from './Subscriber';

const state = new Publish({
    a: 10,
    b: 20,
});

const plusCalc = new Subscriber(() => console.log(`a + b = ${state.a + state.b}`));
const multipleCalc = new Subscriber(() => console.log(`a * b = ${state.a * state.b}`));

plusCalc.subscribe(state);
multipleCalc.subscribe(state);

state.notification();

state.setState({
    a: 100,
    b: 200,
});
