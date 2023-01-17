"use strict";
/** (type 과 interface의 비슷한 점들) */
const wyoming = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500000,
};
const toStrT = x => '' + x;
const toStrI = x => '' + x;
/** 클래스 구현 타입 */
class StateT {
    constructor() {
        this.name = '';
        this.capital = '';
    }
}
class StateI {
    constructor() {
        this.name = '';
        this.capital = '';
    }
}
const t = [10, 20];
// 두번선언된 IState가 합쳐짐.
const wyoming2 = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500000,
};
/** //-- (type 과 interface의 다른 점들) --// */
