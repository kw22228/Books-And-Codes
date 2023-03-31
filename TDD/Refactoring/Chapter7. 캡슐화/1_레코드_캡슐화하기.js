/*
    레코드 캡슐화하기

    [배경]
    - 데이터 레코드는 정의하고 사용하기 간단하지만 계산해서 얻을 수 있는 값(Computed Value)와 그렇지 않은 값을 명확히 구분해야 하는 단점이 있다.
    - 따라서, 클래스로 레코드를 묶는다면 Class의 Getter를 통하여 값을 구분하는데 도움이 될 수 있다.

    [절차]
    1. 레코드를 담은 변수(객체)를 캡슐화(클래스) 한다.
*/

/** 간단한 레코드 캡슐화 하기 */
const organization = {
  name: '애크미 구스베리',
  country: 'GB',
};
const result = `<h1>${organization.name}</h1>`; // 읽기
organization.name = '김재원'; //쓰기

// 리팩터링
function getRawDataOfOrganization() {
  return organization;
}
const resultRefactor = `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = '김재원';

// 클래스 리팩터링
class Organization {
  constructor({ name, country }) {
    this._name = name;
    this._country = country;
  }

  set name(aString) {
    this._name = aString;
  }
  get name() {
    return this._name;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
  get country() {
    return this._country;
  }
}
const organizationRefactorWithClass = new Organization({ name: '애크미 구스베리', country: 'GB' });

///////////////////////////////////////////////////////////////////////////////////

/** 중첩된 레코드 캡슐화 하기 */
const customerData = {
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
};

//함수 캡슐화
function getRawDataOfCustomers() {
  return customerData;
}
function setRawDataOfCustomers(arg) {
  customerData = arg;
}
// 읽기
function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];

  return { later, earlier };
}
getRawDataOfCustomers()[1920].usages[2016][2] = 80; //쓰기

/** 클래스로 리팩터링 */
class CusomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return structuredClone(this._data);
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  getUsage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}
