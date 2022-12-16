interface Vector2D {
    x: number;
    y: number;
}
interface NamedVector {
    name: string;
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y + v.y);
}

// Vector2D 와 NamedVector 인터페이스는 관계를 전혀 선언하지 않았지만
// caculateLength의 파라미터로 Vector2D가 아닌 NamedVector로 들어갈 수 있다.
// 두 인터페이스가 서로 호환이 됨. (구조적 타이핑)
const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v);

// 구조적 타이핑의 문제
interface Vector3D {
    x: number;
    y: number;
    z: number;
}
function normalize(v: Vector3D) {
    // Vector3D 타입의 v가 calculateLenth의 파라미터로 들어감 (Vector2D 와 Vector3D가 서로 호환됨.)
    const length = calculateLength(v);

    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}
normalize({ x: 3, y: 4, z: 5 });
// {x: 0.6, y: 0.8, z: 1}

///////////////////////////////////////
function calculateLength1(v: Vector3D) {
    let length = 0;

    for (const axis of Object.keys(v)) {
        // v가 {address: '123'} 이런식으로 들어올 수 있다.
        // (v[axis]가 어떤속성이 될지 알수 없다. 즉, number라고 확정할 수 없다.)
        const coord = v[axis];
        length += Math.abs(coord);
    }

    return length;
}

// 이 경우에서는 루프보다 모든 속성을 각각 구하는게 더 나은 구현이다.
function calculateLength2(v: Vector3D) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
