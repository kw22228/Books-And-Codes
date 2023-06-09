### 리액트

#### 함수 컴포넌트 vs 클래스 컴포넌트

- 함수형 컴포넌트의 장점

  1. 클래스형 컴포넌트보다 선언이 편하다.
  2. 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.
  3. 클래스 컴포넌트보다 빌드했을때 파일의 크기가 더 작다. (사실 별 차이없음.)

- 함수형 컴포넌트의 단점
  1. state와 라이프사이클 API의 사용이 불가능하다. (react hooks가 나오면서 해결됨.)

#### PropTypes 종류

- array: 배열
- arrayOf: 특정 PropType으로 이루어진 배열 (arrayOf(PropTypes.number) => number[])
- bool: true 혹은 false
- func: 함수
- number: 숫자
- string: 문자열
- symbol: ES6의 Symbol
- node: 렌더링할 수 있는 모든 것 (숫자, 문자열, 혹은 JSX(children도 node PropTypes다))
- instanceOf(클래스): 특정 클래스의 인스턴스 (instnaceOf(MyClass))
- oneOf(['dog', 'cat']): 주어진 배열 요소 중 하나 (유니온 타입)
- oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열안의 종류 중 하나
- objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropTypes객체
- shape({name:PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
- any: 아무 종류
