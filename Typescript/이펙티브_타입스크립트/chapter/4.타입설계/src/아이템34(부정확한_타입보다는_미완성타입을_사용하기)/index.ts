(function () {
    interface Point {
        type: 'Point';
        coordinates: number[];
    }
    interface LineString {
        type: 'LineString';
        coordinates: number[][];
    }
    interface Polygon {
        type: 'Polygon';
        coordinates: number[][][];
    }
    type Geometry = Point | LineString | Polygon;

    type GeoPosition = [number, number]; //위도, 경도의 튜플타입
    interface IPoint {
        type: 'Point';
        coordinates: GeoPosition;
    }
    // 튜플로 타입을 좁혀서 좋은것같지만 좋지않음. 왜냐? 고도라는 새로운 튜플값이 추가된다면 전부다 고쳐야한다.

    /** Lisp */
    type Expression1 = any;
    type Expression2 = number | string | any[];

    const tests: Expression2[] = [
        10,
        'red',
        true,
        ['+', 10, 5],
        ['case', ['>', 20, 10], 'red', 'blue', 'green'], //값이 너무 많다.
        ['**', 2, 31], // **는 함수가 아니므로 오류가 나야한다.
        ['rgb', 255, 128, 64],
        ['rgb', 255, 0, 127, 0], // 값이 너무많다.
    ];

    type FnName = '+' | '-' | '*' | '/' | '>' | '<' | 'case' | 'rgb';
    type CallExpression = [FnName, ...any[]];
    type Expression3 = number | string | CallExpression;

    const tests2: Expression3[] = [
        10,
        'red',
        true,
        ['+', 10, 5],
        ['case', ['>', 20, 10], 'red', 'blue', 'green'],
        ['**', 2, 31],
        ['rgb', 255, 128, 64],
    ]; // **문자열을 체크

    //////////////////////////////////////////////////////////////
    /** 어려움 이해 잘 안됨. */
    interface MathCall {
        0: '+' | '-' | '*' | '/' | '>' | '<';
        1: Expression4;
        2: Expression4;
        length: 3;
    }
    interface CaseCall {
        0: 'case';
        1: Expression4;
        2: Expression4;
        3: Expression4;
        length: 4 | 6 | 8 | 10 | 12 | 14 | 16;
    }
    interface RGBCall {
        0: 'rgb';
        1: Expression4;
        2: Expression4;
        3: Expression4;
        length: 4;
    }
    type CallExpression2 = MathCall | CaseCall | RGBCall;
    type Expression4 = number | string | CallExpression2;

    const tests3: Expression4[] = [
        10,
        'red',
        true,
        ['+', 10, 5],
        ['case', ['>', 20, 10], 'red', 'blue', 'green'],
        ['**', 2, 31],
        ['rgb', 255, 128, 64],
        ['rgb', 255, 128, 64, 73],
    ];
    const okExpression: Expression4[] = [
        ['-', 12],
        ['+', 1, 2, 3],
        ['*', 2, 3, 4],
    ];
})();
/*
    - 타입을 너무 정확하게 하려다가 더 복잡해질 수 있다. (오히려 타입이 없는 것보다 더 나쁘다.)
    - 정확하게 타입을 모델링 할 수 없다면, 부정확하게 모델링하지 말아야한다.
    - 타입 정보를 구체적으로 만들수록 오류 메세지와 오토 컴플리트에 집중해야한다.
*/
