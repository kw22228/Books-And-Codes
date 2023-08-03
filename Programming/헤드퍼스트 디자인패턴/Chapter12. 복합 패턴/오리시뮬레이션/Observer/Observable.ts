import { IObserver, QuackObservable } from '../interface/index';

class Observable implements QuackObservable {
  observers: IObserver[] = [];
  duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
  }

  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  notifyObserver(): void {
    for (const observer of this.observers) {
      observer.update(this.duck);
    }
  }
}

export default Observable;
