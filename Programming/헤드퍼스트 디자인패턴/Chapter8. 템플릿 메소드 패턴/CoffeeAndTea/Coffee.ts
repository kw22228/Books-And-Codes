import CaffeinBeverage from './CaffeineBeverage';

class Coffee extends CaffeinBeverage {
  brew(): string {
    return '커피 우리는 중';
  }

  addCondiments(): string {
    return '설탕과 우류를 추가하는 중';
  }
}
