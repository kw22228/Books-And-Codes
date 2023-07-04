abstract class CaffeinBeverage {
  // 템플릿 메소드
  prepareRecipe() {
    return this.boilWater() + this.brew() + this.pourInCup() + this.addCondiments();
  }

  abstract brew(): string;
  abstract addCondiments(): string;

  boilWater() {
    return '물 끓이는 중';
  }

  pourInCup() {
    return '컵에 따르는 중';
  }
}

export default CaffeinBeverage;
