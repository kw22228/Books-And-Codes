import DuckCall from './Ducks/DuckCall';
import MallardDuck from './Ducks/MallardDuck';
import RedheadDuck from './Ducks/RedheadDuck';
import RubberDuck from './Ducks/RubberDuck';
import AbstractDuckFactory from './Factory/AbstractDuckFactory';
import CountingDuckFactory from './Factory/CountingDuckFactory';
import Flock from './Flock';
import Goose from './Goose/Goose';
import GooseAdapter from './Goose/GooseAdapter';
import Quackologist from './Quackologist';
import QuackCounter from './etc/QuackCounter';
import { Quackable } from './interface/index';

function simulate(duck: Quackable) {
  duck.quack();
}

// const mallardDuck = new MallardDuck();
// const redheadDuck = new RedheadDuck();
// const duckCall = new DuckCall();
// const rubberDuck = new RubberDuck();

// simulate(mallardDuck);
// simulate(redheadDuck);
// simulate(duckCall);
// simulate(rubberDuck);

// const gooseDuck = new GooseAdapter(new Goose());
// simulate(gooseDuck);

// /** QuackCounter */
// const mallardDuckCounter = new QuackCounter(mallardDuck);
// const redheadDuckCounter = new QuackCounter(redheadDuck);
// const duckCallCounter = new QuackCounter(duckCall);
// const rubberDuckCounter = new QuackCounter(rubberDuck);
// const gooseDuckCounter = new QuackCounter(gooseDuck);

// simulate(mallardDuckCounter);
// simulate(redheadDuckCounter);
// simulate(duckCallCounter);
// simulate(rubberDuckCounter);
// simulate(gooseDuckCounter);

// console.log(QuackCounter.getQuacks());

/** Factory */
const duckFactory: AbstractDuckFactory = new CountingDuckFactory();
const mallardDuckFactoryCounter = duckFactory.createMallardDuck();
const redheadDuckFactoryCounter = duckFactory.createRedheadDuck();
const duckCallFactoryCounter = duckFactory.createDuckCall();
const rubberDuckFactoryCounter = duckFactory.createRubberDuck();

simulate(mallardDuckFactoryCounter);
simulate(redheadDuckFactoryCounter);
simulate(duckCallFactoryCounter);
simulate(rubberDuckFactoryCounter);

console.log(QuackCounter.getQuacks());

/** Flock */
const flockOfDucks = new Flock();

flockOfDucks.add(mallardDuckFactoryCounter);
flockOfDucks.add(redheadDuckFactoryCounter);
flockOfDucks.add(duckCallFactoryCounter);
flockOfDucks.add(rubberDuckFactoryCounter);

simulate(flockOfDucks);

console.log(QuackCounter.getQuacks());

/** Observer */
const quackologist = new Quackologist();
flockOfDucks.registerObserver(quackologist);

simulate(flockOfDucks);

console.log(QuackCounter.getQuacks());
