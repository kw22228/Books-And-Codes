import Pizza from '../core/Pizza';

class CheesePizza extends Pizza {
  constructor() {
    super();
    this._name = '치즈피자';
    this._dough = '씬 크러스트 도우';
    this._sauce = '마리나라 소스';
    this._toppings.push('잘게 썬 레지아노 치즈');
  }

  cut(): string {
    return '네모난 모양으로 피자 자르기';
  }
}
export default CheesePizza;
