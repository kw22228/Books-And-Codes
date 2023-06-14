import Pizza from './core/Pizza';
import { CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza } from './sub/index';

/**
 * 피자를 만드는 함수
 * @param {string} type 피자의 종류
 * @returns {Pizza}
 */
function orderPizza(type: string): Pizza {
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

  pizza.prepare();
  pizza.bake();
  pizza.cut();
  pizza.box();

  return pizza;
}

export {};
