### 아이템14. 타입 연산과 제너릭 사용으로 반복 줄이기.

1. Pick연산자

    - type Pick<T, K> = { [k in K]: T[k] }

2. Partial 연산자
    - Pick 연산자의 ?. (선택자)로 들어옴
