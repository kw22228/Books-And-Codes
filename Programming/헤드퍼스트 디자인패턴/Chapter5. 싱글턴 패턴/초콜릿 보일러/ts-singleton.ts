class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;

  constructor() {
    this.empty = true;
    this.boiled = false;
  }

  fill() {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
    }
  }

  drain() {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true;
    }
  }

  boil() {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true;
    }
  }

  isEmpty() {
    return this.empty;
  }
  isBoiled() {
    return this.boiled;
  }
}

const chocolateBoiler = new ChocolateBoiler();
export default chocolateBoiler;
