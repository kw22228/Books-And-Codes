import DuckCall from '../Ducks/DuckCall';
import MallardDuck from '../Ducks/MallardDuck';
import RedheadDuck from '../Ducks/RedheadDuck';
import RubberDuck from '../Ducks/RubberDuck';
import { Quackable } from '../interface/index';
import AbstractDuckFactory from './AbstractDuckFactory';

class DuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new MallardDuck();
  }
  createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }
  createDuckCall(): Quackable {
    return new DuckCall();
  }
  createRubberDuck(): Quackable {
    return new RubberDuck();
  }
}

export default DuckFactory;
