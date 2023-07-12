import MenuItem from '../식당/MenuItem';
import IIterator from './Iterator';

class PancakeHouseMenuIterator implements IIterator {
  items: MenuItem[];
  position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position++;

    return menuItem;
  }

  hasNext(): boolean {
    if (this.position >= this.items.length || !this.items[this.position]) return false;

    return true;
  }
}

export default PancakeHouseMenuIterator;
