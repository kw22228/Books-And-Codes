import MenuComponent from './MenuComponent';

class Menu extends MenuComponent {
  menuComponents: MenuComponent[];
  _name: string;
  _description: string;

  constructor(name: string, description: string) {
    super();
    this._name = name;
    this._description = description;
    this.menuComponents = [];
  }

  add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent) {
    const index = this.menuComponents.indexOf(menuComponent);

    if (index < 0) {
      this.menuComponents.splice(index, 1);
    }
  }

  getChild(i: number) {
    return this.menuComponents[i];
  }

  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }

  print() {
    console.log(this.name);
    console.log(this.description);

    for (const menuComponent of this.menuComponents) {
      menuComponent.print();
    }
  }
}

export default Menu;
