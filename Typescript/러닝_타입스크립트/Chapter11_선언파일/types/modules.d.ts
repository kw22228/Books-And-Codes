/** 모듈 선언 (전역 파일이여야 됨.) */
declare module 'my-example-lib' {
  export const value: string;
}

/** 와일드 카드 모듈 */
declare module '*.module.css' {
  const styles: {
    [i: string]: string;
  };
  export default styles;
}
