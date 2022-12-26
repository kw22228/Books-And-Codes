### 아이템12 (함수 표현식에 타입 적용하기)

-   자바스크립트에서는 함수 문장과 함수 표현식을 다르게 인식한다.
-   타입스크립트에서는 함수 표현식을 사용하는것이 좋다.
    -   함수의 매게변수부터 반환값 까지 타입으로 선언하여 재사용할 수 있기 때문에.
    -   함수의 매개변수에 타입선언을 하는 것보다 함수 표현식 전체타입을 정의하는것이 코드도 간결하고 안전하다.

```javascript
type DiceRolFn = (slides: number) => number;
const rolDice: DiceRolFn = slides => {
    return slides;
};
```
