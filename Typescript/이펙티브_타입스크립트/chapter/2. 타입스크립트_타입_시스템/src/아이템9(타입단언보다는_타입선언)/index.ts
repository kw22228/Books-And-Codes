interface Person5 {
    name: string;
}

const alice: Person5 = { name: 'Alice' }; // 타입선언
const bob = { name: 'Bob' } as Person5; // 타입단언

const alice2: Person5 = {};
const bob2 = {} as Person5;

const alice3: Person5 = {
    name: 'Alice',
    occupation: 'Typescript developer',
};
const bob3 = {
    name: 'bob',
    occupation: 'Javascript developer',
} as Person5;

//////////////////////////////////// 타입 선언 vs 타입 단언

const people: Person5[] = ['alice', 'bob', 'jan'].map(name => ({} as Person5));

const people2: Person5[] = ['alice', 'bob', 'jan'].map(name => {
    const person: Person5 = { name };
    return person;
}); //이렇게 하는게 더 직관적이다
const people3: Person5[] = ['alice', 'bob', 'jan'].map((name): Person5 => ({ name })); // people2랑 똑같다. (반환타입이 Person)

//////////////////////////////////// 타입 단언이 필요한 곳
// 1. DOM Element를 단언.
document.querySelector('#myButton')?.addEventListener('click', e => {
    e.currentTarget; //타입: EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button; // 타입: HTMLButtonElement
});

// 2. null을 단언
const elNull = document.getElementById('foo'); // 타입: HTMLElement | null
const el1 = document.getElementById('foo') as HTMLElement; // 타입: HTMLElement

interface Person2 {
    name: string;
}
const body = document.body;
const el2 = body as unknown as Person2; // 모든 타입은 unknown의 서브타입이다.
