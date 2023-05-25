interface QuackBehavior {
  quack(): string;
}

class Duck {
  private _quackBehavior: QuackBehavior;
  get quackBehavior() {
    return this._quackBehavior;
  }
  set quackBehavior(behavior) {
    this._quackBehavior = behavior;
  }

  display() {
    return '그냥 오리처럼 생김';
  }
  quack() {
    if (!this.quackBehavior) return '';
    return this.quackBehavior.quack();
  }
}

class QauckAble implements QuackBehavior {
  quack() {
    return '꽥꽥';
  }
}
class QuackUnable implements QuackBehavior {
  quack() {
    return '아무 소리도 안나와';
  }
}

class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new QauckAble();
  }

  brokenNeck() {
    this.quackBehavior = new QuackUnable();
  }

  display() {
    return '말라드덕 처럼 생김';
  }
}
class RedheadDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new QuackUnable();
  }
}

const duck1 = new MallardDuck();
console.log(duck1.display());
console.log(duck1.quack());
duck1.brokenNeck();
console.log(duck1.quack());

// const duck2 = new RedheadDuck();
// console.log(duck2.display());
// console.log(duck2.quack());
