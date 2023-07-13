import IIterator from '../반복자 패턴/interface/Iterator';
import IMenu from '../반복자 패턴/interface/Menu';
import MenuItem from './MenuItem';

class Waitress {
  menus: IMenu[];

  constructor(menus: IMenu[]) {
    this.menus = menus;

    // this.printMenu(pancakeIterator);
    // this.printMenu(dinnerIterator);
  }

  printMenus() {
    const menuIterator = this.menus.map((menu) => menu.createIterator());
  }

  private printMenu(iterator: IIterator<MenuItem>) {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(menuItem.name);
      console.log(menuItem.description);
      console.log(menuItem.vegetarian);
      console.log(menuItem.price);
    }
  }
}

export default Waitress;
