docker container ls === docker ps

docker container run --detach --publish 8088:80 diamol/ch02-hello-diamol-web
- eeb2.....

docker container exec -it ee /bin/sh

docker stop ee
docker start ee

====================================================================================

### Dockerfile 작성하기
FROM diamol/node

ENV TARGET="blog.sixeyed.com"
ENV METHOD="HEAD"
ENV INTERVAL="3000"

WORKDIR /web-ping
COPY app.js

CMD ["node", "/web-ping/app.js"]

---
* FROM : 모든 이미지는 다른 이미지로부터 출발.
         다른 이미지로부터 시작이 된다.

* ENV : 환경 변수 값을 지정하기 위한 인스트럭션.

* WORKDIR : 컨테이너 이미지 파일 시스템에 디렉터리를 만들고, 
            해당 디렉터리를 작업 디렉터리 즉, root 디렉터리로 만듬.

* COPY : 로컬 파일 시스템의 파일 혹인 디렉터리를 컨테이너 이미지로 복사

* CMD : 도커가 이미지로부터 컨테이너를 실행했을 때 실행할 명령을 지정.

* RUN : 컨테이너 안에서 명령을 실행한 다음 그 결과를 이미지 레이어에 저장.
        (FROM 인스트럭션에서 지정한 이미지에서 실행할 수 있는 것이여야 함.)
---
### build하기

docker image build --tag web-ping ./

=====================================================================================

### 레지스트리 공유하기

1. 로그인
  - $dockerId="jaewonking"
  - docker login --username $dockerId

2. 새로 이미지 생성
  - docker image tag image-gallery $dockerId/image-gallery:v1

3. 푸쉬
  - docker image push $dockerId/image-gallaery:v1

### 나만의 레지스트리 운영하기

1. 패키징한 이미지를 사용해 컨테이너 형태로 도커 레지스트리를 실행.
  - docker container run -d -p 5000:5000 --restart always diamol/registry

====================================================================================

### 볼륨 사용하기

- 다른 컨테이너 볼륨과 볼륨 공유하기
  - docker container run -d --name t3 --volumes-from todo1 diamol/ch06-todo-list
    t3 컨테이너는 볼륨에 t1 컨테이너 볼륨을 끌어쓴다.

- 볼륨 생성하기
  - docker volume create todo-list

- 컨테이너에 볼륨 적용하기
  - docker container run -d -p 8011:80 -v todo-list:/data --name todo-v1 diamol/ch06-todo-list

### 바인드 마운트
  - $source="$(pwd)\databases".ToLower(); $target="/data"
  - docker container run --mount type=bind,source=$source,target=$target -d -p 8012:80 diamol/ch06-todo-list
  - docker container run --name todo-configured -d -p 8016:80 --mount type=bind,source=$source,target=$target,readonly diamol/ch06-todo-list    => readonly
