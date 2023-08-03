import Observable from '../Observer/Observable';
import { IObserver, Quackable } from '../interface/index';

class QuackCounter implements Quackable {
  duck: Quackable;
  static numberOfQuacks = 0;

  constructor(duck: Quackable) {
    this.duck = duck;
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
  }

  registerObserver(observer: IObserver): void {
    this.duck.registerObserver(observer);
  }

  notifyObserver(): void {
    this.duck.notifyObserver();
  }

  static getQuacks(): number {
    return QuackCounter.numberOfQuacks;
  }
}

export default QuackCounter;
