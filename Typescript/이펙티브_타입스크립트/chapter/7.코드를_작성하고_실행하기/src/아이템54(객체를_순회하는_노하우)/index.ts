(function () {
  const obj = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
  };
  //   for (const k in obj) {
  //     const v = obj[k];
  //   }
  let k: keyof typeof obj;
  for (k in obj) {
    const v = obj[k];
  }

  interface ABC {
    a: string;
    b: string;
    c: number;
  }
  function foo(abc: ABC) {
    let k: keyof ABC; // a, b, c
    for (k in abc) {
      const v = abc[k]; // d는 타입체크가 안되고있음.
    }

    /** 해결법1. Object.entries를 쓴다 */
    for (const [k, v] of Object.entries(abc)) {
      k;
      v;
    }

    /** 해결법2. 제네릭 타입사용 */
    let kG: keyof T;
  }

  const x = { a: 'a', b: 'b', c: 2, d: new Date() };
  foo(x); //구조적 타이핑 (따라서, const k 는 abc에서 a, b, c 이외의 d가 나올 경우의 수 때문에 string으로 추론)
})();

/*
    - 객체를 순회할 때, 키가 어떤 타입인지 정확히 파악하고 있다면 let k: keyof T 와 for-in루프를 사용하자.
      함수의 매개변수로 쓰이는 객체에는 추가적인 키가 존재할 수 있다는 점을 명심하자.
    - 객체를 순회하며 키와 값을 얻는 가장 일반적인 방법은 Object.entries를 사용하는 것.
*/
