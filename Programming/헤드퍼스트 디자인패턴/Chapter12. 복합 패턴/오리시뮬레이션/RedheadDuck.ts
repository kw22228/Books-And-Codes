import { Quackable } from './interface/index';

class RedheadDuck implements Quackable {
  quack(): void {
    console.log('꽥꽥');
  }
}

export default RedheadDuck;
