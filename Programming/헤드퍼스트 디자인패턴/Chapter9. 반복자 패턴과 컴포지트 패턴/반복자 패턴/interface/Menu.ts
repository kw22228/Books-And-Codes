import MenuItem from '../../식당/MenuItem';
import IIterator from './Iterator';

interface IMenu {
  createIterator(): IIterator<MenuItem>;
}

export default IMenu;
