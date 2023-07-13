import PancakeHouseMenuIterator from '../반복자 패턴/PancakeHouseMenuIterator';
import MenuItem from './MenuItem';

class PancakeHouseMenu {
  _menuItems: MenuItem[];

  constructor() {
    this._menuItems = [];

    this.addItem('K&B 팬케이크 세트', '스크램블 에그와 토스트가 곁들여진 팬케이크', true, 2.99);
    this.addItem('레귤러 팬케이크 세트', '달걀 프라이와 소시지가 곁들여진 ', false, 2.99);
    this.addItem(
      '블루베리 팬케이크',
      '신선한 블루베리와 블루베리 시럽으로 만든 팬케이크',
      true,
      3.49
    );
    this.addItem('와플', '취향에 따라 블루베리나 딸기를 얹을 수 있는 와플', true, 3.59);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    this._menuItems.push(new MenuItem(name, description, vegetarian, price));
  }

  get menuItems() {
    return this._menuItems;
  }

  createIterator() {
    return new PancakeHouseMenuIterator(this.menuItems);
  }
}

export default PancakeHouseMenu;
