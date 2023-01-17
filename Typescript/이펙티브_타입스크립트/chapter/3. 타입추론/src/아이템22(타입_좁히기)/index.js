"use strict";
(function () {
    //프로젝트내 변수 공유 체크로 인한 지역변수 사용.
    const el = document.getElementById('foo');
    /** 분기문의 따른 좁히기. */
    if (el) {
        //htmlElement | null 에서 null을 제외하므로 더 좁은 타입체커가 되엇다.
        el.innerHTML = 'Party Time'.blink();
    }
    else {
        el;
        alert('No element');
    }
    /** error를 통한 좁히기 */
    if (!el)
        throw new Error('Unable to find #foo');
    el; //null제외
    /** early return을 통한 좁히기 */
    function contains(text, search) {
        if (search instanceof RegExp) {
            search;
            return !!search.exec(text);
        }
        //early return으로 인해 search가 string타입으로 좁혀졋다
        search;
        return text.includes(search);
    }
    function pickAB(ab) {
        if ('a' in ab)
            ab;
        else
            ab;
        ab;
    }
    /** 빌트인 메서드로 인한 좁히기 */
    function myFunc(text, terms) {
        const termList = Array.isArray(terms) ? terms : [terms]; // 무조건 array타입으로 좁혀짐
    }
    ////////////////////////////////////////////
    /** 실수를 저지르기 쉬운 예제 */
    const el2 = document.querySelector('foo');
    if (el2 instanceof Element) {
        el2; //null일때도 object이다.
    }
    function foo(x) {
        if (x) {
            x; // '', 0, 모두 false이다.
        }
        else {
            x;
        }
    }
    function handleEvent(e) {
        // 각 interface의 unit타입을 이용해 타입을 좁혓다.
        switch (e.type) {
            case 'download':
                e; //DownloadEvent
                break;
            case 'upload':
                e; //UploadEvent
                break;
        }
    }
    //2. 사용자정의 타입 가드
    function isInputElement(el) {
        // el is HTMLInputElement -> 함수의 반환이 true일경우 HTMLInputElement 이다.
        return 'value' in el;
    }
    function getElementContent(el) {
        if (isInputElement(el)) {
            el;
            return el.value;
        }
        el;
        return el.textContent;
    }
    //3. 타입가드를 이용한 배열과 객체의 타입 좁히기
    const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
    const members = ['Janet', 'Michael']
        .map(who => jackson5.find(n => n === who)) //['Michael']
        .filter(who => who !== undefined);
    function isDefined(x) {
        return x !== undefined;
    }
    // ******* 이거의 차이 매우 중요한듯(filter의 callback함수 동작 방식이 다름) **********
    const members2 = ['Janet', 'Michael']
        .map(who => jackson5.find(n => n === who))
        .filter(x => isDefined(x)); //여기서 x는 string|undefined
    const members3 = ['Janet', 'Michael']
        .map(who => jackson5.find(n => n === who)) // string|undefined []
        .filter(isDefined); // isDefined가 함수자체로 넘겨지기때문에 파라미터가 정해지지않고 바로 string으로서 이행되는거같음.
    // fetch('/rest').then(json => console.log(json));
    // fetch('/rest').then(console.log);
})();
/*

*/
