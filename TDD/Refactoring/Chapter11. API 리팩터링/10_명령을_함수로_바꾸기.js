/*
  명령을 함수로 바꾸기 <-> 함수를 명령으로 바꾸기

  [배경]
  - 로직이 복잡하지 않다면 굳이 명령으로 해줄 필요가 없다. 함수로 빼버리자.

  [절차]
  1. 명령을 생성하는 코드와 명령의 실행 메서드를 호출하는 코드를 함께 함수로 추출한다.
  2. 명령의 실행함수가 호출하는 보조 메서드들 각각을 인라인 한다.
  3. 함수 선언 바꾸기를 적용하여 생성자의 매개변수 모두를 명령의 실행 메서드로 옮긴다.
  4. 명령의 실행 메서드에서 참조하는 필드들 대신 대응하는 매개변수를 사용하게끔 바꾼다.
  5. 생성자 호출과 명령의 실행 메서드 호출을 호출자 안으로 인라인한다.
  6. 죽은 코드 제거하기로 명령을 없앤다.
*/

class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }

  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

const monthCharge = new ChargeCalculator(customer, usage, provider).charge;

/** 리팩터링 (명령 -> 함수로) */

// 2. 명령의 실행
// class ChargeCalculatorRefactor {
//   constructor() {}

//   //   get baseCharge() {
//   //     return this._customer.baseRate * this._usage;
//   //   }

//   charge(customer, usage, provider) {
//     const baseCharge = customer.baseRate * usage;
//     return baseCharge + provider.connectionCharge;
//   }
// }

// 1. 명령 생성코드 + 명령의 실행 메서드 한 함수만들기
function charge(customer, usage, provider) {
  //   return new ChargeCalculatorRefactor(customer, usage, provider).charge(customer, usage, provider);

  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
const monthChargeRefactor = charge(customer, usage, provider);
