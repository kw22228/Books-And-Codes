/*
  필드 올리기 <-> 필드 내리기

  [배경]
  - 서브클래스의 필드들이 비슷한 방식으로 쓰인다면 슈퍼클래스의 필드로 끌어올리자.
  - 동적 언어(Javascript)중에는 필드를 클래스 정의에 포함하지 않고 필드에 값을 처음 할당할때 등장할때가 많다.
    이럴 경우는 필드를 올리기전에 반드시 "생성자 본문 올리기"를 하자.

  [절차]
  1. 후보 필드들을 사용하는 곳 모두가 그 필드들을 똑같은 방식으로 사용하는지 살펴보자.
  2. 필드들의 이름이 다르면 똑같은 이름으로 바꿔준다. (필드 이름 바꾸기)
  3. 슈퍼 클래스에 새로운 필드를 생성한다.
  4. 서브 클래스의 필드들을 제거한다.
*/

class Fruit {}
class Banana extends Fruit {
  _name; // 1.필드가 비슷한 의미로 사용되어짐.
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
class Apple extends Fruit {
  _kind; // 1.필드가 비슷한 의미로 사용되어짐.
  constructor(kind) {
    this._kind = kind;
  }
  get kind() {
    return this._kind;
  }
}

/** 리팩터링 */
class FruitRefactor {
  _kind; // 3. 새로운 필드 생성
  constructor(kind) {
    this._kind = kind;
  }
  get kind() {
    return this._kind;
  }
}
class BananaRefactor extends FruitRefactor {
  // _name; // 2.필드의 이름을 통일해준다.
  // _kind; // 6. 필드를 제거해준다.
  constructor(kind) {
    super(kind);
  }
  // get kind() {
  //   return this._kind;
  // }
}
class AppleRefactor extends FruitRefactor {
  // _kind; // 6. 필드를 제거해준다.
  constructor(kind) {
    super(kind);
  }
  // get kind() {
  //   return this._kind;
  // }
}
