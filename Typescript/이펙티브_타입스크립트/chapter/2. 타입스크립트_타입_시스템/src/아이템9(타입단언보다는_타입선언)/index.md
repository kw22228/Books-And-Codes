### 아이템9 (타입 단언보다는 타입 선언을 사용하기)

```javascript
const alice: Person = { name: 'Alice' }; // 타입선언
const bob = { name: 'Bob' } as Person; // 타입단언

const alice2: Person = {}; //타입 오류
const bob2 = {} as Person;

const alice3: Person = {
    name: 'Alice',
    occupation: 'Typescript developer',
};
const bob3 = {
    name: 'bob',
    occupation: 'Javascript developer',
} as Person;
```

-   위 예제와 같이 타입선언은 할당된 값이 해당 인터페이스를 만족하지는 검사한다.
    그러나 타입단언은 강제로 타입을 지정했으므로, 타입체커에게 오류를 무시하라고 하는 것과 같다.

---

#### 화살표함수의 반환타입을 이용해라.

```javascript
const people: Person[] = ['alice', 'bob', 'jan'].map(name => ({} as Person));
const people2: Person[] = ['alice', 'bob', 'jan'].map(name => {
    const person: Person = { name };
    return person;
}); //이렇게 하는게 더 직관적이다
const people3: Person[] = ['alice', 'bob', 'jan'].map((name): Person => ({ name })); // people2랑 똑같다. (반환타입이 Person)
```

---

#### 타입단언이 필요한 곳

1. DOM 엘리먼트를 지정해줄때. 타입스크립트는 DOM엘레멘트에 대해서는 잘 알지 못하기때문에 직접 지정해줘야한다.

```javascript
document.querySelector('#myButton')?.addEventListener('click', e => {
    e.currentTarget; //타입: EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button; // 타입: HTMLButtonElement
});
```

2. null이 아님을 단언하는경우.

```javascript
const elNull = document.getElementById('foo'); // 타입: HTMLElement | null
const el = document.getElementById('foo') as HTMLElement; // 타입: HTMLElement
```
