export interface IObserver {
  update(duck: QuackObservable): void;
}
export interface QuackObservable {
  name?: string;
  registerObserver(observer: IObserver): void;
  notifyObserver(): void;
}

export interface Quackable extends QuackObservable {
  quack(): void;
}
