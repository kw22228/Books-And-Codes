"use strict";
(function () {
    function drawLayer(layer) {
        if (layer.type === 'fill') {
            const { paint } = layer;
            const { layout } = layer;
        }
        else if (layer.type === 'line') {
            const { paint } = layer;
            const { layout } = layer;
        }
        else {
            const { paint } = layer;
            const { layout } = layer;
        }
    }
    const alanT = {
        name: 'Alan Turing',
        birth: {
            place: 'London',
        }, //place만 들어와서 오류남
    };
    function eulogize(p) {
        console.log(p.name);
        const { birth } = p;
        // birth를 하나만 체크해도 된다.
        if (birth) {
            console.log(`was born on ${birth.date} in ${birth.place}.`);
        }
    }
    function eulogizeWithExtends(p) {
        if ('placeOfBirth' in p) {
            p;
            const { dateOfBirth } = p;
        }
    }
})();
/*
    - 유니온 타입의 속성을 여러개 가지는 인터페이스에서는 속성간의 관계가 분명하지 않기 때문에 실수할 수 있다.
        (위 Layer예제처럼 관계(조합)가 맞지않는 현상)
    - 유니온의 인터페이스보다 인터페이스의 유니온이 더 정확하고 이해하기 쉽다.
    - 타입스크립트가 제어 흐름을 분석 할 수 있도록 타입에 태그를 넣는것을 고려해야한다. (fill: 'paint')
*/
