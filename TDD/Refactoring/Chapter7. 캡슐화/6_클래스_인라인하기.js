/*
  클래스 인라인하기 <-> 클래스 추출하기

  [배경]
  - 리팩터링을 진행하다보면 클래스에 남은 역할이 거의 없는 현상이 일어난다.
    이럴때는 해당 클래스를 가장 많이 사용하는 클래스로 인라인해주자.
  - 두 클래스를 하나로 합친후(인라인후) 다시 새로운 클래스를 추출할 때도 유용하다.

  [절차]
  1. 소스 클래스의 각 public메서드에 대응하는 메서드들을 타깃 클래스에 생성한다.
  2. 소스 클래스의 메서드를 사용하는 코드를 모두 타깃 클래스의 위임 메서드를 사용하도록 바꾸자.(this.*** 로 바꾸자는 말같음.)
*/

// class TrackingInformation {
//   constructor(shippingCompany, trackingNumber) {
//     this._shippingCompany = shippingCompany;
//     this._trackingNumber = trackingNumber;
//   }

//   get shippingCompany() {
//     return this._shippingCompany;
//   }
//   set shippingCompany(arg) {
//     this._shippingCompany = arg;
//   }

//   get trackingNumber() {
//     return this._trackingNumber;
//   }
//   set trackingNumber(arg) {
//     this._trackingNumber = arg;
//   }

//   get display() {
//     return `${this.shippingCompany}: ${this.trackingNumber}`;
//   }
// }

class Shipment {
  constructor({ shippingCompany, trackingNumber }) {
    // this._trackingInformation = new TrackingInformation(shippingCompany, trackingNumber);
    this._shippingCompany = shippingCompany;
    this._trackingNumber = trackingNumber;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  /** 외부에서 사용하는 메서드를 인라인 */
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const aShipment = new Shipment({ shippingCompany, trackingNumber });
aShipment.shippingCompany = request.vendor;
