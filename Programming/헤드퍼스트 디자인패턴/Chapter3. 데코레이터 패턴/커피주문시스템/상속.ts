abstract class Beverage {
  private _description: string;

  //첨가물에 해당하는 불리언 변수를 만듬
  private _milk: boolean;
  private _mocha: boolean;
  private _whip: boolean;

  constructor(description: string) {
    this._description = description;
  }
  get description() {
    return this._description;
  }

  //첨가물의 유무를 판단하는 getter/setter
  get milk() {
    return this._milk;
  }
  set milk(milk: boolean) {
    this._milk = milk;
  }
  get mocha() {
    return this._mocha;
  }
  set mocha(mocha: boolean) {
    this._mocha = mocha;
  }
  get whip() {
    return this._whip;
  }
  set whip(whip: boolean) {
    this._whip = whip;
  }

  //   abstract cost(): number;
  cost() {
    let additivesCost = 0;
    if (this.milk) additivesCost += 1000;
    if (this.mocha) additivesCost += 2000;
    if (this.whip) additivesCost += 500;

    return additivesCost;
  }

  toString() {
    return `${this.description}: ${this.cost()}원`;
  }
}

class Decaf extends Beverage {
  constructor() {
    super('디카페인 커피');
    this.milk = true;
  }
  cost() {
    return 5500 + super.cost();
  }
}
class Espresso extends Beverage {
  constructor() {
    super('에스프레소 커피');
  }
  cost() {
    return 3000 + super.cost();
  }
}

const decaf = new Decaf();
console.log(decaf.toString());
