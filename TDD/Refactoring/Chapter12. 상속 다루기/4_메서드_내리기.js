/*
  메서드 내리기

  [배경]
  - 특정 서브클래스 하나 와만 관련된 메서드는 슈퍼클래스에서 제거하고 해당 서브클래스들에 추가하는 것이 좋다.
  - 이 리팩터링은 해당 기능을 서브클래스가 정확히 무엇인지 호출자가 알아야 만 한다. 
    그렇지 않다면 서브클래스에 따라 다르게 동작하는 슈퍼클래스의 조건부 로직을 다형성(10-4)으로 바꿔야한다.

  [절차]
  1. 대상 메서드를 모든 서브클래스에 복사한다.
  2. 슈퍼클래스에서 해당 메서드를 제거한다.
  3. 이 메서드를 사용하지 않는 모든 서브클래스에서 제거한다.
*/

class Vehicle {
  // Car에서만 쓰임
  get wheelCount() {
    return this._wheelCount;
  }

  // Airplane에서만 쓰임
  get wingCount() {
    return this._wingCount;
  }
}
class Car extends Vehicle {
  getCanDriveTime() {
    const DEFAULT_DRIVE_TIME = 100;
    return this.wheelCount * DEFAULT_DRIVE_TIME;
  }
}
class Airplain extends Vehicle {
  getCanFlightTime() {
    const DEFAULT_FLIGHT_TIME = 10000;
    return this.wingCount * DEFAULT_FLIGHT_TIME;
  }
}

/** 리팩터링 */
class VehicleRefactor {
  // 2. 슈퍼클래스에서 해당 메서드 제거
  //   get wheelCount() {
  //     return this._wheelCount;
  //   }
  //   get wingCount() {
  //     return this._wingCount;
  //   }
}
class CarRefactor extends VehicleRefactor {
  getCanDriveTime() {
    const DEFAULT_DRIVE_TIME = 100;
    return this.wheelCount * DEFAULT_DRIVE_TIME;
  }

  // 1.대상메서드를 모든 서브클래스에 복사한다.
  get wheelCount() {
    return this._wheelCount;
  }
  //   get wingCount() { // 3.사용하지 않는 메서드 제거
  //     return this._wingCount;
  //   }
}
class AirplainRefactor extends VehicleRefactor {
  getCanFlightTime() {
    const DEFAULT_FLIGHT_TIME = 10000;
    return this.wingCount * DEFAULT_FLIGHT_TIME;
  }

  // 1.대상메서드를 모든 서브클래스에 복사한다.
  //   get wheelCount() { // 3.사용하지 않는 메서드 제거
  //     return this._wheelCount;
  //   }
  get wingCount() {
    return this._wingCount;
  }
}
