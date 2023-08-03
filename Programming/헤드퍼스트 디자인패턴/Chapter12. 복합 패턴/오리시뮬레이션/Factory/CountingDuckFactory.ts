import DuckCall from '../Ducks/DuckCall';
import MallardDuck from '../Ducks/MallardDuck';
import RedheadDuck from '../Ducks/RedheadDuck';
import RubberDuck from '../Ducks/RubberDuck';
import QuackCounter from '../etc/QuackCounter';
import { Quackable } from '../interface/index';
import AbstractDuckFactory from './AbstractDuckFactory';

class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }
  createRedheadDuck(): Quackable {
    return new QuackCounter(new RedheadDuck());
  }
  createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall());
  }
  createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck());
  }
}

export default CountingDuckFactory;
