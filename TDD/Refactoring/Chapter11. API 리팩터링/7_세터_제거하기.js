/*
  세터 제거하기

  [배경]
  - 세터를 제거함으로써 클래스를 불변으로 만들 수 있다. (오로지 생성자에서만 필드값 설정)

  [절차]
  1. 설정해야 할 값을 생성자에서 받지 않는다면 그 값을 받을 매개변수를 생성자에 추가한다.
  2. 생성자 밖에서 세터를 호출하는 곳을 찾아 제거하고, 대신 새로운 생성자를 사용하도록 한다.
  3. 세터 메서드를 인라인한다. 가능하다면 해당 필드를 불변으로 만든다.
*/

class Person {
  constructor() {}
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }

  get id() {
    return this._id;
  }
  set id(arg) {
    this._id = arg;
  }
}

const martin = new Person();
martin.name = '마틴';
margin.id = '1234';

/** 리팩터링 (id를 불변으로 만들어보자) */
class PersonRefactor {
  constructor(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }

  get id() {
    return this._id;
  }
}

const jw = new PersonRefactor('200101');
jw.name = '재원';
