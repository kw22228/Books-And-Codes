import Observable from '../Observer/Observable';
import { IObserver, Quackable } from '../interface/index';

class DuckCall implements Quackable {
  name: string = 'Call';
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }
  quack(): void {
    console.log('꽉꽉');
  }

  registerObserver(observer: IObserver): void {
    this.observable.registerObserver(observer);
  }

  notifyObserver(): void {
    this.observable.notifyObserver();
  }
}

export default DuckCall;
