### 아이템46. 타입 선언과 관련된 세 가지 버전 이해하기

1. 라이브러리의 버전
2. 타입 선언(@types)의 버전
3. 타입스크립트의 버전

- 세가지 버전중 하나라도 맞지 않으면, 의존성과 상관없어 보이는 곳에서 오류가 발생할 수 있다.

- 실제 라이브러리와 타입 정보의 버전이 다르면 생기는 문제점

  1. 라이브러리는 업데이트했는데 타입 선언은 업데이트 하지않은 경우.

     - 타입 선언도 업데이트하여 라이브러리와 버전은 맞춘다
     - interface에 보강 기법을 사용하여 타입정보를 추가한다.
     - 타입선언의 업데이트를 직접 작성하고 커뮤니티에 기여한다.

  2. 라이브러리보다 타입선언이 최신인 경우

     - 라이브러리와 타입 선언의 버전이 맞도록 라이브러리 버전을 업데이트하거나, 타입선언의 버전을 낮춘다.

  3. 프로젝트에서 사용하는 타입스크립트 버전보다 라이브러리에서 필요로 하는 타입스크립트 버전이 최신인 경우.

     - 프로젝트의 타입스크립트 버전을 올린다.
     - 라이브러리 타입선언의 버전을 내린다.
     - declare module 선언으로 라이브러리의 타입 정보를 없애버린다.
     - 타입스크립트 특정 버전에 대한 타입정보를 다운받으려면 npm i -D @types/lodash@ts3.1 (타입스크립트 3.1에 맞는 버전 다운)

  4. @types 의존성이 중복 될 경우.

  - 예를들어 현재 프로젝트와 호환되지않는 @types/foo를 @types/bar에서 의존한다면
    npm은 중첩된 폴더에 별도로 @types/foo를 다시 설치한다.
  - 해결법
    - npm ls @types/foo를 실행하여 어디서 타입선언이 중복되었는지 확인한다.
    - @types/foo를 업데이트 하거나, @types/bar를 업데이트해서 서로 버전이 호환되게 만든다.

##### 요약

- @types 의존성과 관련된 세가지 버전이 있다. 라이브러리 버전, @types의 버전, 타입스크립트 버전
- 라이브러리를 업데이트 하는경우 @types역시 업데이트 해야한다.
- 타입선언을 라이브러리에 포함하는 것과 DefinitelyTyped에 공개하는 것 사이의 장단점을 이해해야한다.
  타입스크립트로 작성된 라이브러리라면 타입 선언을 자체적으로 포함하고,
  자바스크립트로 작성된 라이브러리라면 타입선언을 DefinitelyTyped에 공개하는 것이 좋다.
