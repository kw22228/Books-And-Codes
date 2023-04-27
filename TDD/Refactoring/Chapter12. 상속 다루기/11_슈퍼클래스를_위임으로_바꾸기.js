/*
  슈퍼클래스를 위임으로 바꾸기

  [배경]
  - 슈퍼클래스의 기능들이 서브클래스에 어울리지 않는다면 상속을 통해 이용하면 안된다는 얘기이다.
  - 이런 경우 상속을 버리고 위임으로 바꿔 객체를 분리하여 오류를 피하자.
  - 위임을 이용하면 기능 일부만 빌려올 뿐이라 서로 별개인 개념이 명확해진다.

  [절차]
  1. 슈퍼클래스 객체를 참조하는 필드를 서브클래스에 만든 후 위임 참조를 새로운 슈퍼클래스 인스턴스로 초기화 하자.
  2. 슈퍼클래스의 동작 각각에 대응하는 전달 함수를 서브클래스에 만든다.
  3. 슈퍼클래스의 동작 모두가 전달 함수로 오버라이드 되었다면 상속을 끊는다.
*/

class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  hasTag(arg) {
    return this._tags.includes(arg);
  }
}
class Scroll extends CatalogItem {
  constructor(id, title, tags, dateLastCleaned) {
    super(id, title, tags);
    this._lastCleaned = dateLastCleaned;
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

/** 리팩터링 */
class CatalogItemRefactor {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  hasTag(arg) {
    return this._tags.includes(arg);
  }
}
class ScrollRefactor /*extends CatalogItemRefactor*/ {
  constructor(id, title, tags, dateLastCleaned) {
    // super(id, title, tags); // 3.슈퍼클래스와의 상속을 끊는다.

    this._catalogItem = new CatalogItemRefactor(id, title, tags); // 1.슈퍼클래스 인스턴스로 초기화
    this._lastCleaned = dateLastCleaned;
  }

  // 2.슈퍼클래스의 동작에 대응하는 전달 메서드를 만든다.
  get id() {
    return this._catalogItem.id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(aString) {
    return this._catalogItem.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
