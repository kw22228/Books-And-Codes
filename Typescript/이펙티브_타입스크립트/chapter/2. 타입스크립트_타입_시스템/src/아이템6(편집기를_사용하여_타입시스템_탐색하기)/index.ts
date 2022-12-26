/** 타입추론에 대해서 알아보자!! */

let num2 = 10; // number 타입으로 추론

// 반환값을 number로 추론
function add3(a: number, b: number) {
    return a + b;
}

function logMessage2(message: string | null) {
    if (message) {
        message; // 조건문에서 null이 걸러지고 string으로 추론
    }
}

// 객체 내의 프로퍼티 타입을 추론
const foo = {
    x: [1, 2, 3], // 튜플타입 ([number, number, number])이어야 하면, 구문을 명시해야함. 현재는 number[]
    bar: {
        name: 'Fred',
    },
};

function restOfPath(path: string) {
    // split 메소드가 string[] 을 반환하기 때문에 체인된 slice에서 <string> 으로 추론함
    return path.split('/').slice(1).join('/');
}

function getElement(elOrId: string | HTMLElement | null): HTMLElement {
    // if (typeof elOrId === 'object') {
    //     // elOrId가 null일때도 참임. 따라서, elOrId === null을 먼저 체크해준다.
    //     return elOrId;
    // } else if (elOrId === null) {
    //     return document.body;
    // } else {
    //     // el이 null이 나올 수도 있기 때문에 null체크를 해준후 return해준다.
    //     const el = document.getElementById(elOrId);
    //     return el;
    // }

    if (elOrId === null) {
        return document.body;
    } else if (typeof elOrId === 'object') {
        return elOrId;
    } else {
        const el = document.getElementById(elOrId);

        if (el) return el;
        else return document.body;
    }
}

///////////////////////////////////////////////

/** 타입 검색은 어떻게 하는걸까? */
const response = fetch('http://example.com');

// fetch를 ctrl + 마우스 클릭 해보면 lib.dom.d.ts로 들어가지면서 fetch에 대한 타입정의를 볼 수 있다.
// 이러한 이미 정의된 타입을 가지고 fetch의 RequestInit과 같은 옵션을 검색하여 볼 수 있음.
