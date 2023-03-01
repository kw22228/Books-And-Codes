### Chapter13. 구성옵션

- CLI vs 구성

  - 컴파일러: 포함된 각 파일이 타입스크립트에 따라 컴파일되거나 타입을 확인하는 방법
  - 파일: 타입스크립트가 실행될 파일과 실행되지 않은 파일

  - 기본적으로 tsc는 현재 디렉터리와 하위 디렉터리에 있는 숨겨지지 않은 모든 .ts 파일에서 실행되고
    숨겨진 디렉터리와 node_modules는 무시한다.

- Compiler Options

  - 파일 포함

    - include: 타입스크립트 컴파일에 포함할 디렉터리와 파일을 설명하는 문자열 배열을 명시한다.

      - 글로브 와일드 카드
      - \*: 0개 이상의 문자와 일치한다.(디렉터리 구분자 제외)
      - ?: 하나의 문자와 일치한다.(디렉터리 구분자 제외)
      - \*\*/: 모든 레벨에 중첩된 모든 디렉터리와 일치한다.
      - 예시)
        - "typing/\*_/_.d.ts" -> typing 디렉토리의 모든 하위디렉토리의 .d.ts파일
        - "src/\*_/_??.\*" -> src 디렉토리 하위에 적어도 2개 이상의 문자를 가진 파일

    - exclude: 제외할 파일을 문자열 배열로 명시한다.

      - 예시)
        "\*\*/external" -> 어떤디렉토리 내에 external 디렉토리를 제외한다.
        "node_modules" -> 노드 모듈 패키지 디렉토리를 제외한다.

  - 대체 확장자

    - jsx: 타입스크립트가 jsx 코드를 사용할 것인지.

    - resolveJsonModule: true로 설정할 시 .json파일을 읽을수 있다. json파일을 객체로 구조분해 할당해서 가져올 수 있는것 같음.

  - 자바스크립트로 내보내기

    - outDir: 타입스크립트를 컴파일 후 트렌스파일링 된 js파일의 위치를 정해준다.
      (기본적으로 타입스크립트는 트렌스파일링 된 js파일을 해당 js가있는 위치에 생성한다.)

    - target: 컴파일후 내보내는 js파일의 버전을 명시해준다.
      기본적으로 코드가 더짧은 es2019 이상의 버전을 해주는게 좋음.

    - declaration: js파일로 컴파일 할때 .d.ts파일을 같이 내보낸다.

    - emitDeclarationOnly: 컴파일 후 .js파일없이 .d.ts파일만 내보낸다.

    - sourceMap: 컴파일 후 sourcemap파일을 같이 내보낸다.

    - declarationMap: 컴파일 후 .js .d.ts .d.ts.map 파일을 내보낸다.

    - noEmit: 컴파일 할때 오로지 타입체커로만 사용한다. (.js파일등 어떤파일도 내보내지 않는다.)

  - 타입 검사

    - lib: typescript의 lib.\*.d.ts 파일의 타입을 지정하게 해줌.
      ex) "lib": "ES2016" -> lib.2016.d.ts 파일에 정의된 타입을 컴파일러에서 사용한다.

    - skipLibCheck: 소스 코드에 명시적으로 포함되지 않은 선언 파일에서 타입 검사를 건너뛰도록 한다.

    - strict: 엄격모드를 활성화한다. 각각의 타입체킹 옵션을 true로 해주나, 개개인으로 false를 해주면 그 옵션만 false가 지정됨.

      - noImplicitAny: 암묵적인 any를 허용하지 않는다.

      - strictBindCallApply: Function.bind, Function.call, Function.apply 메소드를 사용한 함수의 경우 any로 변환되는데 이것을 방지한다.

      - strictFunctionTypes: 함수의 매개변수를 좀더 엄격하게 검사한다.

      - strictNullChecks: 모든 타입에 null | undefined를 추가하면 오류가 발생한다.

      - strictPropertyInitialization: 클래스의 프로퍼티 초기화를 강제한다.

      - useUnknownInCatchVariables: 모든 try catch문에서 오류는 안전하지않은 any타입을 제공하는데 unknown타입으로 강제할 수 있게 한다.

  - 모듈

    - module: ESNext, CommonJS 등.. 어떤 모듈을 사용하여 import나 export해올것인지 정함

    - moduleResolution: import에서 가져온 경로가 module에 매핑됨.
      node -> Node.js와 같은 CommonJS 리졸버에서 사용하는 도앚ㄱ
      nodenext -> ECMA스크립트 모듈에 대해 지정된 동작에 맞게 조정
      근데 두개의 옵션은 별 차이없다고함.

    - esModuleInterop: commonJS로 export된 모듈을 import로 가져오려고할 때 활성화하면 오류가 나지않는다.
