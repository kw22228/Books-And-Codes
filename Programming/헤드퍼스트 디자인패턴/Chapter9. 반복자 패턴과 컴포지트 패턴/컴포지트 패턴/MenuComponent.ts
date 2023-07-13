abstract class MenuComponent {
  add(menuComponent: MenuComponent) {
    throw new Error('서포트 x');
  }
  remove(menuComponent: MenuComponent) {
    throw new Error('서포트 x');
  }
  getChild(i: number) {
    throw new Error('서포트 x');
  }

  get name() {
    return '';
  }
  get description() {
    return '';
  }
  get price() {
    return 0;
  }
  get vegetarian() {
    return false;
  }

  print() {
    throw new Error('서포트 x');
  }
}

export default MenuComponent;
