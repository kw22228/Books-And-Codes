import MenuComponent from './MenuComponent';

class MenuItem extends MenuComponent {
  _name: string;
  _description: string;
  _vegetarian: boolean;
  _price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    super();

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

  print(): void {
    console.log(this.name);
    if (this.vegetarian) console.log('(v)');
    console.log(this.price);
    console.log(this.description);
  }
}

export default MenuItem;
