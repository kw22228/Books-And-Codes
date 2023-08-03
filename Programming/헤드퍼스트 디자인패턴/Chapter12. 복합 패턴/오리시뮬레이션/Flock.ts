import Observable from './Observer/Observable';
import { IObserver, Quackable } from './interface/index';

class Flock implements Quackable {
  quackers: Quackable[] = [];

  add(quacker: Quackable) {
    this.quackers.push(quacker);
  }

  quack(): void {
    for (const quacker of this.quackers) {
      quacker.quack();
    }
  }

  registerObserver(observer: IObserver): void {
    for (const quacker of this.quackers) {
      quacker.registerObserver(observer);
    }
  }

  notifyObserver(): void {}
}

export default Flock;
