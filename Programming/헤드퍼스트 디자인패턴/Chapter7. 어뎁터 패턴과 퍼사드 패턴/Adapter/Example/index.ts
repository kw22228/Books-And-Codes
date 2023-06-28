/*
    Enumeration 인터페이스 (타깃)에서 최근에 Iterator 인터페이스(어댑티)가 새로생겻다.
 */
interface IEnumeration {
  hasMoreElemnts();
  nextElement();
}
interface IIterator {
  hasNext();
  next();
  remove();
}

class EnumerationIterator implements IIterator {
  enumeration: IEnumeration;

  constructor(enumeration: IEnumeration) {
    this.enumeration = enumeration;
  }

  hasNext() {
    return this.enumeration.hasMoreElemnts();
  }

  next() {
    return this.enumeration.nextElement();
  }

  remove() {
    throw new Error(`This method is not supported.`);
  }
}
