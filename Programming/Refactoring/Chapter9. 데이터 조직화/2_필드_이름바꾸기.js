/*
  필드 이름 바꾸기

  [배경]
  데이터 필드의 이름은 데이터 구조와 프로그램을 이해하기 위해서 중요하다.
  레코드 캡슐화를 선행하자.

  [절차]
  1. 레코드의 유효 범위가 제한적이라면 필드에 접근하는 모든 코드를 수정한 후 테스트한다.
  2. 레코드가 캡슐화 되지 않았다면 우선 캡슐화 하자.
  3. 캡슐화된 객체 안의 private 필드명을 변경하고, 그에 맞게 메서드를 수정하자.
  4. 테스트
  5. 생성자의 매개변수 중 필드와 이름이 겹치는게 있다면 함수 선언 바꾸기로 변경하자.
  6. 접근자들의 이름도 바꿔준다.
*/

// const organization = {
//   name: '애크미 구스베리',
//   country: 'GB',
// };

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}
const organization = new Organization({ name: '애크미 구스베리', country: 'GB' });

/** 필드 name의 이름을 title로 바꾸자 */
class OrganizationRefactor {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }

  get title() {
    return this._title;
  }
  set title(aString) {
    this._title = aString;
  }

  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}
const organizationRefactor = new OrganizationRefactor({ title: '애크미 구스베리', country: 'GB' });
