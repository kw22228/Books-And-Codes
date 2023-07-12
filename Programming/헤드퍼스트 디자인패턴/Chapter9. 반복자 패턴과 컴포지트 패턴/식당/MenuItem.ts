class MenuItem {
  _name: string;
  _description: string;
  _vegetarian: boolean;
  _price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    this._name = name;
    this._description = description;
    this._vegetarian = vegetarian;
    this._price = price;
  }

  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get price() {
    return this._price;
  }
  get vegetarian() {
    return this._vegetarian;
  }
}

export default MenuItem;
