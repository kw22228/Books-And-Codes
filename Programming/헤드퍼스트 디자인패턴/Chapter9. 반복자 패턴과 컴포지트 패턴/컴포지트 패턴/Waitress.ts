import MenuComponent from './MenuComponent';

class Waitress {
  allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  printMenu() {
    this.allMenus.print();
  }
}

export default Waitress;
