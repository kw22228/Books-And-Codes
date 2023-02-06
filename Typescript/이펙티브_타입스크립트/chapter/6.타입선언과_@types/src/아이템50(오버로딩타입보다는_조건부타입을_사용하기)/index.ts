(function () {
  //   function double(x: number | string): number | string;
  //   function double(x: any) {
  //     return x + x;
  //   }

  //   function double<T extends number | string>(x: T): T;
  //   function double(x: any) {
  //     return x + x;
  //   }

  //   const num = double(12);
  //   const str = double('x');

  //   function double(x: number): number;
  //   function double(x: string): string;
  //   function double(x: any) {
  //     return x + x;
  //   }

  /** 조건부 타입 */
  function double<T extends number | string>(x: T): T extends string ? string : number;
  function double(x: any) {
    return x + x;
  }
  function f(x: number | string) {
    return double(x);
  }

  const num = double(12);
  const str = double('x');
})();

/*
    오버로딩 타입보다 조건부 타입을 사용하는게 좋다.
    조건부 타입은 추가적인 오버로딩 없이 유니온 타입을 지원할 수 있다.
*/
