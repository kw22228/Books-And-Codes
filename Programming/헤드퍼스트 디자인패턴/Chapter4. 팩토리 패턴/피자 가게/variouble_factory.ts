import Pizza from './core/Pizza';
import { CheesePizza, ClamPizza, PepperoniPizza, VeggiePizza } from './sub';

abstract class PizzaStore {
  orderPizza(type: string) {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'pepperoni':
        return new PepperoniPizza();
      case 'clam':
        return new ClamPizza();
      case 'veggie':
        return new VeggiePizza();

      default:
        throw new Error('No pizza');
    }
  }
}
class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'pepperoni':
        return new PepperoniPizza();
      case 'clam':
        return new ClamPizza();
      case 'veggie':
        return new VeggiePizza();

      default:
        throw new Error('No pizza');
    }
  }
}
