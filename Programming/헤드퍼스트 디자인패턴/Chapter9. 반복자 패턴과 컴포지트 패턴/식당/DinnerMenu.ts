import MenuItem from './MenuItem';
import DinnerMenuIterator from '../반복자 패턴/DinnerMenuIterator';
import IIterator from '../반복자 패턴/Iterator';

class DinnerMenu {
  static MAX_ITEMS = 6;
  numberOfItems = 0;
  _menuItems: MenuItem[];

  constructor() {
    this._menuItems = [];
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    if (this.numberOfItems >= DinnerMenu.MAX_ITEMS) {
      console.log('죄송합니다. 메뉴가 꽉 찼습니다. 더 이상 추가할 수 없습니다.');
      return;
    }

    this.menuItems[this.numberOfItems] = new MenuItem(name, description, vegetarian, price);
    this.numberOfItems++;
  }

  get menuItems() {
    return this._menuItems;
  }

  createIterator(): IIterator {
    return new DinnerMenuIterator(this.menuItems);
  }
}

export default DinnerMenu;
