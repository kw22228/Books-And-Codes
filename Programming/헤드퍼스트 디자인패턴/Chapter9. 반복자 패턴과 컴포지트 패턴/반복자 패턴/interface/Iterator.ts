interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
  remove?(): void;
}

export default IIterator;
