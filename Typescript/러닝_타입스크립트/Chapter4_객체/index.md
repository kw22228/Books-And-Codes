### 객체

- 구조적 타이핑이란?

  - 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있다.
    즉, 매개변수나 변수가 특정 객체 타입으로 선언되면 타입스크립트에 어떤 객체를 사용하든 해당 속성이 있어야한다.

- 교차타입

  - type alias에서의 extends

  ```javascript
  type Artwork = {
    genre: string,
    name: string,
  };
  type Writing = {
    pages: number,
    name: string,
  };

  type WittenArt = Artwork & Writing;
  ```
