### 인터페이스

- 인터페이스 vs 타입 별칭

  - 인터페이스는 속성 증가를 위해 병합 할 수 있다. (interface를 중복해서 쓰면 덮어씌워지는게 아니라 추가됨.)

  - 인터페이스는 클래스가 선언된 구조의 타입을 확인하는데 사용가능, 타입 별칭 사용 x

  - 일반적으로 인터페이스가 타입체커에서 더 빨리 동작한다.
    인터페이스는 타입 별칭이 하는것 처럼 새로운 객체 리터럴의 동적인 복사 붙여넣기보다 내부적으로 더 쉽게 캐시할 수 있는 타입을 선언한다.

  - 인터페이스는 이름없는 객체 리터럴의 별칭이 아닌 이름있는 객체로 간주되므로 어려운 특이케이스에서 나타나는 오류 메세지를 좀 더 쉽게 읽을 수 있다.

타입 별칭보다는 인터페이스를 쓰는게 좋을듯..
타입 별칭은 유니온타입같은 것을 쓸때 사용하자!

- 함수(속성) vs 메서드

  - 메서드는 readonly로 선언할 수 없지만 일반 속성(함수 속성)은 가능하다.
  - 인터페이스 병합은 메서드와 속성을 다르게 처리한다.
  - 타입에서 수행되는 일부 작업은 메서드와 속성을 다르게 처리한다.

  - 인덱스 시그니처의 주의사항 - 인덱스 시그니처는 객체에 동적으로 속성을 추가 할 수 있지만, 완벽하게 타입을 잡아주지는 못한다.

  ```javascript
  interface DatesByName {
    [i: string]: Date;
  }
  const publishDates: DatesByName = {
    Frankenstein: new Date('1 January 1818'),
  };
  publishDates.Frankenstein; // 타입 Date
  console.log(publishDates.Frankenstein.toString()); // 정상

  publishDates.Beloved; // 타입 Date 이지만 런타임 undefined
  console.log(publishDates.Beloved.toString()); // 실제 런타임에서는 오류가남.
  ```

  - 키/값 쌍을 저정하려고하는데 키를 미리 알 수 없다면, Map을 사용하는것이 더 안전하다.

- 인터페이스 확장
  - 인터페이스의 extends는 상속이 아니라 포함 된다 라고 봐야할듯. (상위 집합)
  - 따라서 extends로 속성을 재정의 하게되면 상위집합의 타입에 포함된 상태에서 재정의를 해야한다.
    ex) 상위집합 string | null -> 포함은 string, null, string | null 의 3가지 타입만 재정의할 수 있음.
