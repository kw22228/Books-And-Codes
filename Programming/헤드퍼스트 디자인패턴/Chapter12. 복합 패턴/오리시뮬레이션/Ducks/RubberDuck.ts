import Observable from '../Observer/Observable';
import { IObserver, Quackable } from '../interface/index';

class RubberDuck implements Quackable {
  name: string = 'Rubber';
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  quack(): void {
    console.log('삑삑');
    this.notifyObserver();
  }

  registerObserver(observer: IObserver): void {
    this.observable.registerObserver(observer);
  }

  notifyObserver(): void {
    this.observable.notifyObserver();
  }
}

export default RubberDuck;
