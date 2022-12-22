### 아이템10(객체 래퍼 타입 피하기)

-   타입스크립트는 기본형과 래퍼 타입을 별도로 모델링한다.
    -   string 과 String
    -   number 와 Number
    -   boolean 과 Boolean
    -   symbol 과 Symbol
    -   bigint 와 BigInt
-   타입스크립트가 제공하는 타입 선언은 전부 기본형 타입으로 되어있다. 따라서, 래퍼타입으로 지정해주는 것을 피해야한다.

```javascript
function getStringLen(foo: String) {
    return foo.length;
}

getStringLen('hello'); //오류안남
getStringLen(new String('hello')); //오류안남

function isGreeting(phrase: String) {
    return ['hello', 'good day'].includes(phrase); // 기본형인 string에 의해 래퍼타입은 String은 에러남.
}
```

-   위 예제에서 처럼 string은 String에 할당할 수 있지만, String은 string에 할당 할 수 없다.
