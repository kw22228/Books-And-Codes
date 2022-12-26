//타입의 Cylinder
interface Cylinder {
    radius: number;
    height: number;
}
const Cylinder = (radius: number, height: number) => ({ radius, height }); //값의 Cylinder

function calculateVolume(shape: unknown) {
    // instaceof는 런타임 연산자, 즉 값의 Cylinder
    if (shape instanceof Cylinder) {
        shape.radius;
    }
}

//타입
type T1 = 'string literal';
type T2 = 123;

//값
const v1 = 'string literal';
const v2 = 123;

/////////////////////////////////////////////////////

interface Person1 {
    first: string;
    last: string;
}
const p: Person1 = { first: 'Jane', last: 'Jacobs' };
//       --타입--   -------------값------------------

function email(p: Person, subject: string, body: string): Response {
    //        값    타입     값      타입    값    타입     타입(반환)
}

////////////////////////////////////////////////////

class CylinderClass {
    radius = 1;
    height = 1;
}
function calculateVolume2(shape: unknown) {
    if (shape instanceof CylinderClass) {
        shape; // 타입은 CylinderClass
        shape.radius; // 타입은 number
    }
}

/////////////////////////////////////

type T11 = typeof p; // 타입 Person1
type T22 = typeof email; // 타입은 (p: Person, subject: string, body: string) => Rsponse;

const v11 = typeof p; // 값은 'object'
const v22 = typeof email; // 값은 'function'

type C = InstanceType<typeof CylinderClass>;
const first: Person1['first'] = p['first'];
