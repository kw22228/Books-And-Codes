import Pizza from './core/Pizza';
import { CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza } from './sub/index';

class PizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    }

    // else if (type === 'greek') { 별로 안팔리는 그리스 피자 제외
    //   pizza = new GreekPizza();
    // }
    else if (type === 'ppperoni') {
      pizza = new PepperoniPizza();
    }

    // 신메뉴 추가
    else if (type === 'clam') {
      pizza = new ClamPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    } else {
      pizza = new Pizza();
    }

    return pizza;
  }
}

class PizzaStore {
  private _factory: PizzaFactory;
  constructor(factory: PizzaFactory) {
    this._factory = factory;
  }

  orderPizza(type: string) {
    const pizza = this._factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export {};
