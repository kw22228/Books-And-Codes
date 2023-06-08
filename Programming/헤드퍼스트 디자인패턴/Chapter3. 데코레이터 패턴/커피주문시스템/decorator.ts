/** 음료 */
const SIZE = {
  TALL: 'TALL',
  GRENDE: 'GRANDE',
  VENTI: 'VENTI',
} as const;
type TSize = (typeof SIZE)[keyof typeof SIZE];

abstract class Beverage {
  private _description: string;
  private _size: TSize; // 사이즈 추가

  constructor() {
    this._description = '';
    this._size = SIZE.TALL;
  }

  get description() {
    return this._description;
  }
  set description(description: string) {
    this._description = description;
  }

  // 사이즈에 따른 공통 증가 코스트
  get sizeCost(): number {
    return this._size === SIZE.GRENDE ? 500 : this._size === SIZE.VENTI ? 1000 : 0;
  }
  set size(size: TSize) {
    this._size = size;
  }

  abstract cost(): number;
}
class Espresso extends Beverage {
  constructor(size: TSize = SIZE.TALL) {
    super();
    this.description = '에스프레소';
    this.size = size;
  }

  cost() {
    return 4000 + this.sizeCost;
  }
}
class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = '하우스 블렌딩 커피';
  }

  cost() {
    return 9000 + this.sizeCost;
  }
}

/** 첨가물 */
abstract class CondimentDecorator extends Beverage {
  private _beverage: Beverage;
  set beverage(beverage: Beverage) {
    this._beverage = beverage;
  }
  get beverage() {
    return this._beverage;
  }

  abstract get description(): string;
}
class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  get description() {
    return `${this.beverage.description} + 모카`;
  }

  cost(): number {
    return this.beverage.cost() + 2000;
  }
}
class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  get description() {
    return `${this.beverage.description} + 휘핑크림`;
  }

  cost(): number {
    return this.beverage.cost() + 500;
  }
}

const espresso: Beverage = new Espresso(SIZE.VENTI);
console.log(espresso.description + `: ${espresso.cost()}`);

const espressoWithDoubleMochaAndWhip = new Mocha(new Mocha(new Whip(espresso)));
console.log(
  espressoWithDoubleMochaAndWhip.description + `: ${espressoWithDoubleMochaAndWhip.cost()}`
);
