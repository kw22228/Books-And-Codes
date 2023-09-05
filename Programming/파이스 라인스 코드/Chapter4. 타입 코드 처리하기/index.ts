// function average(arr: number[]) {
//   if (arr.length === 0) {
//     throw 'Empty array not allowed';
//   } else {
//     return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
//   }
// }

// function assertNoEmpty(arr: number[]) {
//   if (arr.length === 0) {
//     throw 'Empty array not allowed';
//   }
// }

// function averageRefactor(arr: number[]) {
//   assertNoEmpty(arr);

//   return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
// }

enum TrafficLight {
  RED,
  YELLOW,
  GREEN,
}
interface TrafficLight2 {
  isRed(): boolean;
  isYellow(): boolean;
  isGreen(): boolean;
  updateCar(): void;
}
class RED implements TrafficLight2 {
  isRed() {
    return true;
  }
  isYellow() {
    return false;
  }
  isGreen() {
    return false;
  }

  updateCar() {
    car.stop();
  }
}
class YELLOW implements TrafficLight2 {
  isRed() {
    return false;
  }
  isYellow() {
    return true;
  }
  isGreen() {
    return false;
  }

  updateCar() {
    car.drive();
  }
}
class GREEN implements TrafficLight2 {
  isRed() {
    return false;
  }
  isYellow() {
    return false;
  }
  isGreen() {
    return true;
  }

  updateCar() {
    car.drive();
  }
}

const CYCLE = [TrafficLight.RED, TrafficLight.GREEN, TrafficLight.YELLOW];
function updateCarForLight(current: TrafficLight2) {
  current.updateCar();
}

function deposit(to: string, amount: number) {
  let accountId = database.find(to);
  database.updateOne(accountId, { $inc: { balance: amount } });
}
function transfer(from: string, to: string, amount: number) {
  deposit(from, -amount);
  deposit(to, amount);
}
