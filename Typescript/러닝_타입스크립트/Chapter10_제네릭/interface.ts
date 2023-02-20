/** 제네릭 인터페이스 */
interface Box<T> {
  inside: T;
}
let stringyBox: Box<string> = {
  inside: 'abc',
};
let numberBox: Box<number> = {
  inside: 123,
};

let incorrectBox: Box<number> = {
  inside: '123', // 타입 매개변수와 맞지않음.
};

////////////////////////

interface Array<T> {
  pop(): T | undefined;

  push(...items: T[]): number;
}

/** 유추된 제네릭 인터페이스 */
interface LinkedNode<T> {
  next?: LinkedNode<T>;
  value: T;
}
function getLast<T>(node: LinkedNode<T>): T {
  return node.next ? getLast(node.next) : node.value;
}

let lastDate = getLast({
  value: new Date('09-13-1993'),
});

let lastFruit = getLast({
  next: {
    value: '123',
  },
  value: 'apple',
});

let lastMisMatch = getLast({
  next: {
    value: 123, //number
  },
  value: false, //boolean   mismatch!!
});

/** 제네릭 인터페이스 구현 */
interface ActingCredit<T> {
  role: T;
}
class MoviePart implements ActingCredit<string> {
  role: string;
  speaking: boolean;

  constructor(role: string, speaking: boolean) {
    this.role = role;
    this.speaking = speaking;
  }
}
const part = new MoviePart('Miranda', true);
part.role; // string
export {};
