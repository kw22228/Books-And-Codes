/*
    컬렉션 캡슐화하기

    [배경]
    - 필요한 인터페이스만 노출하자.
    - 무분별한 Getter/Setter보다 Getter할 대상의 필요한 인터페이스 (add, remove, etc..)만 노출 하는게 좋다.

    [절차]
    1. 아직 컬렉션을 캡슐화하지 않았다면 캡슐화 하자.
    2. 컬렉션에 원소를 추가/제거 하는 함수를 추가한다. 
      - 컬렉션 자체를 통째로 바꾸는 세터는 제거한다.
      - 세터를 제거 할 수 없다면 인수로 받은 컬렉션을 깊은 복사하여 저장하자.
    3. 컬렉션을 참조하는 부분을 찾아 앞에서 추가한 추가/제거 함수를 호출하자.
    4. 컬렉션 게터를 수정하여 원본 내용을 수정할 수 없는 읽기전용 프록시나 복제본을 반환한다.
*/

class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

const numAdvanedCoures = new Person().courses.filter((c) => c.isAdvanced).length;

/** 리팩터링 */
class PersonRefactor {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    return this._courses.slice(); // 복제해서 반환
  }
  set courses(aList) {
    this._courses = aList.slice(); // 인자를 복제해서 할당
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

const aPerson = new PersonRefactor('JW');
for (const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}
