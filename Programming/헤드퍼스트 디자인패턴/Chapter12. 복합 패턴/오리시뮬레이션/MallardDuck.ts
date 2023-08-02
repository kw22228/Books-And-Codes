import { Quackable } from './interface/index';

class MallardDuck implements Quackable {
  quack(): void {
    console.log('꽥꽥');
  }
}

export default MallardDuck;
