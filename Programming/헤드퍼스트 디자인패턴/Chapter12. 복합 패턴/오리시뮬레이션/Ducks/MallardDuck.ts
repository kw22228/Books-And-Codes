import Observable from '../Observer/Observable';
import { IObserver, Quackable } from '../interface/index';

class MallardDuck implements Quackable {
  name: string = 'Mallard';
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  quack(): void {
    console.log('꽥꽥');
    this.notifyObserver();
  }

  registerObserver(observer: IObserver): void {
    this.observable.registerObserver(observer);
  }

  notifyObserver(): void {
    this.observable.notifyObserver();
  }
}

export default MallardDuck;
