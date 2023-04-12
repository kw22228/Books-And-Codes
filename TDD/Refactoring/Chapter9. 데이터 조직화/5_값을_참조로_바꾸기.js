/*
  값을 참조로 바꾸기 <-> 참조를 값으로 바꾸기

  [배경]
  데이터를 갱신할 때, 하나라도 놓치면 데이터의 일관성이 깨질 때.

  [절차]
  1. 같은 부류에 속하는 객체들을 보관할 저장소를 만든다(이미 있다면 생략)
  2. 생성자에서 이 부류의 객체들 중 특정 객체를 정확히 찾아내는 방법이 있는지 확인한다.
  3. 호스트 객체의 생성자들을 수정하여 필요한 객체를 이 저장소에서 찾도록 한다.
*/

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

// 위의 방식으로하면 예를들어 customer를 5개만든다면 이 Customer 객체는 독립된 5개가 된다. (공유하지 않는)

/** 리팩터링 (값을 참조로 바꾸기) */
let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}

class OrderRefactor {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}
