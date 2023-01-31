(function () {
  /** 안좋은 예 */
  function getLengthBad(array: any) {
    return array.length;
  }
  /** any가 배열이기때문에 array.length 타입이 체크된다.
   *  함수의 반환타입이 any가 아닌 number로 추론됨.
   *  함수가 호출 될때 파라미터가 배열인지 체크된다.
   */
  function getLength(array: any[]) {
    return array.length;
  }

  getLengthBad(/123/); // 오류없음. (undefined 반환)
  getLength(/123/);

  //////////////////////////////////////////////////////////

  function hasTwelveLetterKey(o: { [key: string]: any }) {
    // key가 string
    for (const key in o) {
      if (key.length === 12) {
        console.log(key, o[key]);

        return true;
      }
    }
    return false;
  }
  /** 인덱스 시그니처를 안한경우 */
  function hasTwelveLetterKeyWithoutIndexSigniture(o: object) {
    for (const key in o) {
      if (key.length === 12) {
        console.log(key, o[key]); //object 타입이라 o[key]의 타입이 정해져있지않음.
        return true;
      }
    }
    return false;
  }

  ////////////////////////////////////////////////////////////////

  type Fn0 = () => any; //매개변수 없음
  type Fn1 = (arg: any) => any; //매개변수 1개
  type FnN = (...args: any[]) => any; //매개변수 제한없음.

  const numArgsBad = (...args: any) => args.length; //any반환
  const numArgsGood = (...args: any[]) => args.length; //number반환
})();
/*
    - any를 사용할 때는 정말로 모든 값이 허용되어야만 하는지 면밀히 검토해야 한다. (좁힐수 있으면 좁히라는 말 같음.)
    - any보다 더 정확하게 모델링 할 수 있도록 any[] 또는 {[id:string]: any} 또는 () => any 처럼 구체적인 형태를 사용해야 한다.
*/
