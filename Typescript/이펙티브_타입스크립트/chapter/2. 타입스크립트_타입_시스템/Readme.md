### 타입 시스템

-   타입 시스템은 언어 서비스를 지원한다.

    -   코드 자동완성
    -   명세 검사
    -   검색
    -   리팩터링
    -   etc...

-   편집기에서 타입스크립트 언어 서비스를 적극 활용해야 한다.
-   편집기를 사용하여 어떻게 타입 시스템이 동작하는지, 타입스크립트가 어떻게 타입을 추론하는지 개념을 잡을 수 있다.
-   타입스크립트가 동작을 어떻게 모델링하는지 알기 위해 타입 선언 파일 (ex: lib.dom.d.ts)을 찾아보는 방법을 터득해야함.
-   클래스가 타입으로 쓰일 떄는 속성과 메소드가 사용되지만, 값으로 쓰일때는 생성자가 사용된다.

### 유틸리티 타입

-   Exclude : 두번째 제네릭이 첫번째 제네릭에 할당가능한지 판단하고, 할당 가능한 타입을 제외한 나머지 타입을 이용하여 타입 정의
-   typeof : 값을 읽어서 타입스크립트를 반환한다.

```javascript
// Exclude
type T = Exclude<string | Date, string | number>; // 타입은 Date
type NonZeroNums = Exclude<number, 0>; // 타입은 number

// typeof
type T11 = typeof p; // 타입 Person1
type T22 = typeof email; // 타입은 (p: Person, subject: string, body: string) => Rsponse;
```

### 타입스크립트 용어

<img src="./src/assets/용어.png" />
