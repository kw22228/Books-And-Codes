### 아이템45. devDependencies에 typescript와 @types 추가하기

- dependencies

  - 현재 프로젝트를 실행하는 데 필수적인 라이브러리들이 포함됨.
    프로젝트를 npm에 공개하여 다른 사용자가 해당 프로젝트를 설치한다면, dependencies에 들어있는 라이브러리도 함께 설치됨.
    이러한 현상을 "전이(transitive) 의존성" 이라고 한다.

- devDependencies

  - 현재 프로젝트를 개발하고 테스트하는 데 사용되지만, 런타임에는 필요없는 라이브러리들이 포함된다.
    프로젝트를 npm에 공개하여 다른 사용자가 해당 프로젝트를 설치한다면, devDependencies에 포함된 라이브러리들은 제외된다.

- peerDependencies
  - 런타임에 필요하긴 하지만, 의존성을 직접 관리하지 않는 라이브러리들이 포함된다.
    단적인 예로 플러그인을 들 수 있다. 플러그인이 사용되는 실제 프로젝트에서 선택하도록 만들 때 사용한다.

##### 요약.

- 타입스크립트를 시스템 레벨(dependencies)로 설치하면 안된다.
  devDependencies에 포함시키고 동일한 버전을 다운 받을수 있게 해야한다.
- @types 의존성은 dependcies가 아니라 devDependencies에 포함시켜야한다.
  (런타임시에 @types가 필요한 경우라면 별도의 작업이 필요할 수 있다.)
