## Docker Compose

### docker-compose.yml

- version : 도커 컴포즈 파일 형식의 버전
- services: 어플리케이션을 구성하는 모든 컴포넌트 이다.
            실제 컨테이너 대신 서비스 개념을 단위로 삼는다. 하나의 서비스를 같은 이미지로 여러 컨테이너에서 실행할 수 있기 떄문.
- netwokks: 서비스 컨테이너가 연결될 모든 도커 네트워크
- environment: 컨테이너 안에서 사용될 환경 변수 값 정의.
- secrets: 내부의 파일에기록될 비밀값 정의

### 도커 컴포즈 기본적인 것
- docker-compose up --detach
- docker-compose -f docker-compose-windows.yml up -d
- docker-compose down
- docker-compose start : 기존 컨테이너 재시작.
- docker-compose stop : 모든 컨테이너가 중지됨.

### 서버 스케일 아웃 하기
- docker-compose up -d -scale iotd=3
  iotd라는 컨테이너를 3개로 늘려 스케일아웃 함.

- docker-compose logs --tail=1 iotd
  iotd 컨테이너(3개)들의 로그의 마지막 로그를 출력 하는것을 확인해보면
  각각 분산처리하는걸 확인할 수 있다.