/*
  서브클래스 제거하기 <-> 타입코드를 서브클래스로 바꾸기

  [배경]
  - 더이상 쓰이지 않는 서브클래스는 슈퍼클래스의 필드로 대체하여 제거해버리자.

  [절차]
  1. 서브클래스의 생성자를 팩터리 함수로 바꾼다.
  2. 서브클래스의 타입을 검사하는 코드가 있다면 검사 코드에 함수 추출하기(6-1)와 함수 옮기기(8-1)을 차례로 적용하여 슈퍼클래스로 옮기자.
  3. 서브클래스의 타입을 나타내는 필드를 슈퍼클래스에 만든다.
  4. 서브클래스를 참조하는 메서드가 방금 만든 타입 필드를 이용하도록 한다.
  5. 서브클래스를 제거하자.
*/

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    return 'X';
  }
}

class Male extends Person {
  get genderCode() {
    return 'M';
  }
}
class Female extends Person {
  get genderCode() {
    return 'F';
  }
}
function loadFromInput(data) {
  const result = [];
  data.forEach((aRecord) => {
    let p;
    switch (aRecord.gender) {
      case 'M':
        p = new Male(aRecord.name);
        break;
      case 'F':
        p = new Female(aRecord.name);
        break;
      default:
        p = new Person(aRecord.name);
    }
    result.push(p);
  });
  return result;
}

/** 리팩터링 */

function loadFromInputRefactor(data) {
  //   const result = []; // 파이프라인으로 대체
  //   data.forEach((aRecord) => { // 1.팩터리 함수로 대체
  //     let p;
  //     switch (aRecord.gender) {
  //       case 'M':
  //         p = new Male(aRecord.name);
  //         break;
  //       case 'F':
  //         p = new Female(aRecord.name);
  //         break;
  //       default:
  //         p = new Person(aRecord.name);
  //     }
  //     result.push(p);
  //   });
  //   return result; // 파이프라인으로 대체

  return data.map((aRecord) => createPerson(aRecord)); // 1.팩터리 함수와 반복문 파이프라인으로 대체
}

// 1.switch-case문을 팩터리 함수로 바꿔주자
function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M':
      return new PersonRefactor(aRecord.name, 'M'); // 4.슈퍼클래스로 바꿔주고 방금만든 타입필드를 이용하게 한다.
    case 'F':
      return new PersonRefactor(aRecord.name, 'F');
    default:
      return new PersonRefactor(aRecord.name);
  }
}

class PersonRefactor {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || 'X'; // 3.서브클래스의 타입을 나타내는 필드를 슈퍼클래스에 만듬.
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    // return 'X';
    return this._genderCode;
  }
}

// 5.서브클래스들을 제거한다.
// class MaleRefactor extends PersonRefactor {
//   get genderCode() {
//     return 'M';
//   }
// }
// class FemaleRefactor extends PersonRefactor {
//   get genderCode() {
//     return 'F';
//   }
// }
