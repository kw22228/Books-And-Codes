declare function shallowEqual(a: any, b: any): boolean;

// declare function cacheLast<T extends Function>(fn: T): T;
function cacheLast<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;

  return function (...args: any[]) {
    if (!lastArgs || !shallowEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }
    return lastResult;
  };
}

/** 함수 내부에는 any가 많지만, 함수 외부에서는 any가 사용됐는지 알지 못한다. */
function cacheLastWithUnknown<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;

  return function (...args: any[]) {
    if (!lastArgs || !shallowEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }

    return lastResult;
  } as unknown as T; // 타입단언문을 통해 반환 함수를 T타입으로 엮어줬다.
}

/////////////////////////////////////////////////////////////////////

// declare function shallowObjectEqual<T extends object>(a: T, b: T): boolean;
function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
  for (const [k, aVal] of Object.entries(a)) {
    // if (!(k in b) || aVal !== b[k]) return false; // k in b로 b안에 k가 있다는 것을 확인했지만 여전히 오류가 나고있음.
    if (!(k in b) || aVal !== (b as any)[k]) return false; // k in b로 체크를 했기 때문에 b as any는 안전한 타입이다. 결국 정확한 타입체크를 하고있음.
  }
  return Object.keys(a).length === Object.keys(b).length;
}
/*
    - 타입 선언문은 일반적으로 타입을 위험하게 만들지만 상황에 따라 필요하기도 하고 해결책이 되기도한다.
      불가피하게 사용해야 한다면, 정확한 정의를 가지는 함수 안으로 숨기도록 하자.
*/
