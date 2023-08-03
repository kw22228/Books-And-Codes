import { IObserver, QuackObservable } from './interface/index';

class Quackologist implements IObserver {
  update(duck: QuackObservable): void {
    console.log(`꽥꽥학자: ${duck.name}가 방금 소리냈다.`);
  }
}

export default Quackologist;
