## Out parser

- 언어 모델에서 받은 결과를 구조화 하는 모듈
- 보통 언어 모델을 호출해서 얻은 결과는 텍스트인데, 이것을 프로그램이 사용하기 쉬운 구조로 변환하는 역할을 함

### 메소드

- CommaSeperatedListOutputParser
  - 목록 형식으로 출력하도록 언어 모델에서 출력 형식 지시를 추가한다.
  - 출력 결과를 분석해 목록 형식으로 변환한다.
