### 타입스크립트 설정 이해하기

-   tsc --noImplicitAny program.ts
-   tsc --init으로 tsconfig.json 설정 파일을 통해 설정 가능.

```javascript
{
    "compilerOptions":{
        "noImplicitAny": true
    }
}
```

### 중요

-   자바스크립트는 런타임에 타입체크(안할수도 있음)를 하고, 타입스크립트는 타입 시스템 컴파일때 타입을 체크한다.(tsc 돌릴때 인거같음)
-   타입스크립트 타입 시스템은 자바스크립트의 런타임 동작을 모델링한다.

-   interface는 타입으로만 사용 가능하다.
-   타입을 class로 선언하면 타입과 값으로 모두 사용가능하다. (@src shape.ts and shapeClass.ts 확인)

-   타입연산은 런타임에 영향을 주지 않는다. 즉, 런타임 타입과 선언된 타입이 동일하지 않을 수 있다. (@src light.ts 확인)
-   타입 오류가 존재해도 코드 생성(컴파일 ts -> js)은 가능하다.
-   타입은 런타임에 사용할 수 없다. 런타입에 지정하려면 별도의 방법 필요. (태그된 유니온과 속성 체크방법 or 클래스로 타입지정)
-   함수 오버로딩을 지원한다. 다만, 온전히 타입 수준의 함수 오버로딩만 가능(@src overloading.ts)

-   any타입을 지양하자
    -   any 타입을 사용하면 타입체커와 타입스크립트 언어를 무력화 시킨다. any 타입은 진짜 문제를 감추며, 타입 시스템의 신뢰도를 무너뜨림.

### tsconfig.json 필수 option

-   noImplicitAny : 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부 (true 설정 해놓자)
-   strictNullChecks : 엄격한 null과 undefined 확인 여부 (타입스크립트 초보자는 설정안해도 괜찮.. 나중에 설정해놓자)
-   noEmitOnError : 타입체커에 오류가 있으면 컴파일 하지 않는다.
