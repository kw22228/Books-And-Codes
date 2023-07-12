import IIterator from '../반복자 패턴/Iterator';
import DinnerMenu from './DinnerMenu';
import PancakeHouseMenu from './PancakeHouseMenu';

class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinnerMenu: DinnerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinnerMenu: DinnerMenu) {
    const pancakeIterator = pancakeHouseMenu.createIterator();
    const dinnerIterator = dinnerMenu.createIterator();

    this.printMenu(pancakeIterator);
    this.printMenu(dinnerIterator);
  }

  private printMenu(iterator: IIterator) {
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
