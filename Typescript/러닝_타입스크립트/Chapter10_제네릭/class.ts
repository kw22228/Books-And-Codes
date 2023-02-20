/** 제네릭 클래스 */
class Secret<K, U> {
  key: K;
  value: U;

  constructor(key: K, value: U) {
    this.key = key;
    this.value = value;
  }

  getValue(key: K): U | undefined {
    return this.key === key ? this.value : undefined;
  }
}
const storage = new Secret(12345, 'luggage');
const value = storage.getValue(1987);

/** 명시적 제네릭 클래스 타입 */
class CurriedCallback<T> {
  #callback: (input: T) => void;

  constructor(callback: (input: T) => void) {
    this.#callback = (input: T) => {
      console.log(input);
      callback(input);
    };
  }

  call(input: T) {
    this.#callback(input);
  }
}
new CurriedCallback((input: string) => {
  console.log(input.length);
});

// input: unknown
new CurriedCallback(input => {
  console.log(input.length); // unknown
});

/** 제네릭 클래스 확장 */
class Quote<T> {
  lines: T;

  constructor(lines: T) {
    this.lines = lines;
  }
}
class SpokenQuote extends Quote<string[]> {
  speak() {
    console.log(this.lines.join('\n'));
  }
}

new Quote('The only real failure is the failure to try.').lines; // string
new Quote([4, 8, 15, 16, 20, 50]).lines; // number[]

new SpokenQuote(['greed is so', 'it destroys everthing']).lines;
new SpokenQuote([4, 8, 15, 16, 20, 50]); // string[]에 number[]가 들어가고있음.

////////////////////////////////
class AttributedQuote<T> extends Quote<T> {
  speaker: string;

  constructor(value: T, speaker: string) {
    super(value);
    this.speaker = speaker;
  }
}
new AttributedQuote('the road to success is always...', 'lily tomlin');

/** 메서드 제네릭 */
class CreatePairFactory<K> {
  key: K;

  constructor(key: K) {
    this.key = key;
  }

  createPair<V>(value: V) {
    return { key: this.key, value };
  }
}
const factory = new CreatePairFactory('role');
const numberFair = factory.createPair(10); // string number
const stringPair = factory.createPair('sophie'); // string string

/** 정적 클래스 제네릭 */
class BothLogger<T> {
  instanceLog(value: T) {
    console.log(value);
    return value;
  }

  static staticLog<K>(value: K) {
    let fromInstance: T; // static이기때문에 클래스에 선언된 타입 사용불가.

    console.log(value);
    return value;
  }
}
const logger = new BothLogger<number[]>();
logger.instanceLog([1, 2, 3]); // number[]
BothLogger.staticLog([false, true]); // boolean[]
export {};
