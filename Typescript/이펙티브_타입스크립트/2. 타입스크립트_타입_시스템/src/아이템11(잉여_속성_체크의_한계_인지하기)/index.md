### 아이템11(잉여 속성 체크의 한계 인지하기)

```javascript
interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

//객체 리터럴 (잉여 속성 체크가 적용)
const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present', //에러
};

//구조적 타이핑
const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
};
const r1: Room = obj;
```

-   잉여속성체크 -> 엄격한 체크
-   위 예제에서 r1은 구조적 타이핑으로 오류가 나지않는다. 하지만 r은 elephant에서 오류가난다.
    평상시의 구조적 타이핑이면 numDoors와 ceilingHeightFt가 부분집합이므로 오류가 나지않아야하는데
    객체 리터럴의 잉여 속성 체크(엄격한 체크)로인해 오류가 나고있다.
-   타입단언문은 잉여 속성 체크를 하지않는다.
-   index.ts 확인
