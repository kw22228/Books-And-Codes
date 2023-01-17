"use strict";
const Cylinder = (radius, height) => ({ radius, height }); //값의 Cylinder
function calculateVolume(shape) {
    // instaceof는 런타임 연산자, 즉 값의 Cylinder
    if (shape instanceof Cylinder) {
        shape.radius;
    }
}
//값
const v1 = 'string literal';
const v2 = 123;
const p = { first: 'Jane', last: 'Jacobs' };
//       --타입--   -------------값------------------
function email(p, subject, body) {
    //        값    타입     값      타입    값    타입     타입(반환)
}
////////////////////////////////////////////////////
class CylinderClass {
    constructor() {
        this.radius = 1;
        this.height = 1;
    }
}
function calculateVolume2(shape) {
    if (shape instanceof CylinderClass) {
        shape; // 타입은 CylinderClass
        shape.radius; // 타입은 number
    }
}
const v11 = typeof p; // 값은 'object'
const v22 = typeof email; // 값은 'function'
const first = p['first'];
