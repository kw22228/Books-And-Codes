import CaffeineBeverageWithHook from './CaffeineBeverageWithHook';

class CoffeeWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log('커피를 우려내는 중');
  }

  addCondiments(): void {
    console.log('우유와 설탕을 추가하는 중');
  }

  customerWantsCondiments(): boolean {
    return false;
  }
}

const coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.prepareRecipe();
