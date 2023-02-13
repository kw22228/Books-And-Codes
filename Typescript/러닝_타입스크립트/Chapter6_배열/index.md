### 배열의 불안정한 멤버 (주의)

```javascript
function withElements(elements: string[]) {
  console.log(elements[9001].length); // 타입오류 없음 undefined
}
withElements(['its', 'over']);
```

- 위 예제처럼 elements[9001]은 undefined이다.
  하지만 타입스크립트는 의도적으로 배열의 인덱스가 존재하는지 확인하지 않는다고 한다.
- noUncheckedIndexedAccess 옵션을 설정하면 배열을 더 엄격하게 검사한다고함.
  (하지만 너무 엄격해서 대부분의 프로젝트에서는 사용하지 않음.)

### const 어서션

- 타입을 가장 좁은 타입으로 변형시켜줌 (readonly)
- 읽기 전용으로 바뀌기 때문에 참조값이라도 안에 있는 내용을 변경할 수 없음.

```javascript
const pairAlsoMutable: [number, string] = [1157, 'tomoe'] as const; // readonly가 아니라서 못들어감

const pairConst = [1157, 'tomoe'] as const;
pairConst[0] = 1247; // readonly라서 변경하지 못함.
```
