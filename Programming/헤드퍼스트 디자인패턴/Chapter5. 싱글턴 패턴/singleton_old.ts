class Singleton {
  public name: string;
  private static uniqueInstance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
}

const single = Singleton.getInstance();
const single2 = Singleton.getInstance();

single.name = 'kjw';
console.log(single2.name); //공유하고 있다.
