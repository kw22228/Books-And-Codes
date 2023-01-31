(function () {
  function range(start, limit) {
    const out = [];
    for (let i = start; i < limit; i++) {
      out.push(i);
    }
    return out;
  }

  function rangeWithType(start: number, limit: number) {
    const out = [];
    for (let i = start; i < limit; i++) {
      out.push(i);
    }
    return out; //반환 타입이 number[] 로 추론됨.  (any -> number로 진화함)
  }

  //////////////////////////////////////////////////////

  const result = []; // any[]
  result.push('a');
  result; // string[] 진화1
  result.push(1);
  result; // (string|number)[] 진화2

  function conditionEvaluate() {
    let val; // any
    if (Math.random() < 0.5) {
      val = /hello/;
      val; // Regexp 진화.
    } else {
      val = 12;
      val; // number 진화.
    }
    val; // number | Regexp 로 진화
  }

  function tryCatchEvaluate() {
    let val = null;
    try {
      somethingDangerous();
      val = 12;
      val; // number 진화
    } catch (e) {
      console.warn('alas!');
    }
    val; // number | null
  }

  /** 선언적 any는 진화가 일어나지 않음. (암묵적 any + noImplicitAny속성이 설정된 상태여야 진화가능) */
  function anyEvaluate() {
    let val: any;
    if (Math.random() < 0.5) {
      val = /hello/;
      val; // any
    } else {
      val = 12;
      val; // any
    }
    val; // any
  }

  ///////////////////////////////////////////////////////////////

  function range2(start: number, limit: number) {
    const out = [];
    if (start === limit) {
      return out; // any타입에 어떠한 할당도 하지 않고 사용하려고 하면 암시적 any 오류가 발생한다.
    }
    for (let i = start; i < limit; i++) {
      out.push(i);
    }
    return out;
  }

  function makeSquares(start: number, limit: number) {
    const out = [];
    /** 메소드안에 콜백 함수도 any를 진화시키지 않는다. */
    range2(start, limit).forEach(i => {
      out.push(i * i);
    });

    return out;
  }
})();

/*
    - 일반적인 타입들은 정제되기만 하는 반면, 암시적any와 any[]타입은 진화할 수 있다.
      이러한 동작이 발생하는 코드를 인지하고 이해할 수 있어야 한다.
      
     - any를 진화시키는 방법보다 명시적 타입 구문을 사용하는것이 안전한 타입을 유지하는 방법이다.
*/
