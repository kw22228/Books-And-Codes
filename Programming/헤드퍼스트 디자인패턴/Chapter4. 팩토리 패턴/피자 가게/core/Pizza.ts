class Pizza {
  protected _name: string;
  protected _dough: string;
  protected _sauce: string;
  protected _toppings: string[];

  constructor() {
    this._toppings = [];
  }
  get name() {
    return this._name;
  }

  prepare() {
    return '준비한다.';
  }
  bake() {
    return '굽는다.';
  }
  cut() {
    return '자른다.';
  }
  box() {
    return '포장한다.';
  }
}
export default Pizza;
