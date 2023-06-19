class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static instance: ChocolateBoiler = new ChocolateBoiler(); // 2번 방법

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    // if (!this.instance) {
    //   this.instance = new ChocolateBoiler();
    // }
    return this.instance;
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

export {};
