### jest

- jest는 페이스북에서 만든 자바스크립트 테스팅 라이브러리이다.
  jest 이전에는 Mocha나 Jasmin을 Test Runner로 사용하고, Chai나 Expect와 같은 Test Mathcher를 사용했으며,
  Sinon과 Testdouble같은 Test Mock 라이브러리도 필요했엇다.
  하지만 jest는 라이브러리 하나에 Test Runner, Test Matcher, Test Mock까지 전부 제공해주기 때문에 아주 편하다.

#### Install

npm i -D jest

#### Jest Cli Options (https://jestjs.io/docs/cli)

jest <regexForTestFiles>

- regex에 매치되는 파일들을 테스트한다.

--ci

- CI환경에서 실행된 것으로 간주한다.

--clearCache

- Jest 캐시 디렉터리를 삭제한다. 테스트는 실행하지 않음.

--collectCoverageFrom=<glob>

- glob패턴으로 작서도니 위치의 테스트 적용범위 정보를 출력한다.

--watch

- 파일이 변경되면 변경된 파일과 관련된 테스트를 다시 실행한다.

-- watchAll

- 파일이 변경되면 모든 테스트를 다시 실행한다.

-- testMatch

- jest --testMatch \*_/_.test.js 처럼 파일을 match로 지정해줄 수 있다.

--init

- 기본 jest.config.js 파일을 생성한다.

#### Jest Configuation (jest.config.js)

- automock

  - Default: false
  - 테스트에서 import한 모든 모듈이 자동으로 mock이 된다.
  - 모든 모듈은 API형식은 유지되면서 내부는 대체 구현된다.

- clearMocks

  - Default: false
  - 테스트마다 모든 mock의 mock.calls와 mock.instances를 초기화한다.
  - 각 테스트전에 'jest.clearAllMocks()'를 호출하는 것과 동일한 효과

- coverageThreshold

  - 적용 범위 결과에 최소 임계값을 설정한다. 임계값을 넘지 못하면 테스트는 실패한다.

  ```javascript
  "coverageThreshold": {
  "global": {
    "branches": 50,
    "functions": 50,
    "lines": 50,
    "statements": 50
  },
  "./src/Queue/": {
    "branches": 40,
    "statements": 40
  }
  }
  ```

- moduleNameMapper

  - webpack의 resolve.alias와 유사하다

  ```javascript
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
  }
  ```

- testEnvironment

  - Default: 'node'
  - jsdom으로 설정하면 DOM API를 사용할 수 있다.

- testURL
  - default: http://localhost
  - jsdom환경의 URL을 설정한다. location.href같은 속성에 반영된다.

#### Matchers

- expect

  - 예상 객체를 반환한다.

- toBe

  - expect가 반환한 값과 비교한다.
  - 두값을 비교할 때 데이터 타입과 값을 모두 비교한다.
    즉, 참조값을 비교하기 때문에 참조타입은 테스트에 실패할 수 있다.

- toEqual

  - toBe와 마찬가지로 두값을 비교한다.
  - 하지만 toEqual은 값 자체를 비교한다. 이 함수는 객체와 배열을 재귀적으로 비교하므로, 객체끼리 비교를해도 올바른 비교를 할 수 있다.

- .not
  - nagative 표현에 사용.

**test**/matcher.test.js 참고
