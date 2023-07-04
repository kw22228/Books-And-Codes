import CaffeinBeverage from './CaffeineBeverage';

class Tea extends CaffeinBeverage {
  brew(): string {
    return '찻잎을 우려내는 중';
  }

  addCondiments(): string {
    return '레몬을 추가하는 중';
  }
}

const tea = new Tea();
console.log(tea.prepareRecipe());
