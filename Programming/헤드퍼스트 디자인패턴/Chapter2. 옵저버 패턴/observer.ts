interface ISubject {
  registerObserver(): void;
  removeObserver(): void;
  notifyObservers(): void;
}
class ConcreteSubject implements ISubject {
  private _state: any;
  registerObserver(): void {}
  removeObserver(): void {}
  notifyObservers(): void {}

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }
}

interface IObserver {
  update(): void;
}
class ConcreteObserver implements IObserver {
  update(): void {}

  //기타 옵저버용 메소드
}
