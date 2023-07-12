import MenuItem from '../식당/MenuItem';

interface IIterator {
  hasNext(): boolean;
  next(): MenuItem;
  remove?(): void;
}

export default IIterator;
