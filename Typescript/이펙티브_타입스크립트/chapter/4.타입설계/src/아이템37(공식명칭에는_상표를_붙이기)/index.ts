(function () {
    interface Vector2D {
        x: number;
        y: number;
    }

    function calculateNorm(p: Vector2D) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }

    calculateNorm({ x: 3, y: 4 }); //5

    const vec3D = { x: 3, y: 4, z: 1 };
    calculateNorm(vec3D);

    /** normal-typing */
    interface vector2DWithNormalTyping {
        _brand: '2d';
        x: number;
        y: number;
    }
    function vec2D(x: number, y: number): vector2DWithNormalTyping {
        return { x, y, _brand: '2d' };
    }

    function calculateNormWidthNormalTyping(p: vector2DWithNormalTyping) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    calculateNormWidthNormalTyping(vec2D(3, 4));
    calculateNormWidthNormalTyping(vec3D);

    /** 절대경로 상표화하기 */
    type AbsolutePath = string & { _brand: 'abs' };
    function listAbsolutePath(path: AbsolutePath) {}
    function isAbsolutePath(path: string): path is AbsolutePath {
        return path.startsWith('/');
    }

    function f(path: string) {
        if (isAbsolutePath(path)) {
            path;
            listAbsolutePath(path);
        }
        path;
        listAbsolutePath(path);
    }

    /** 정렬타입 모델링하기 */

    type SortedList<T> = T[] & { _brand: 'sorted' };
    function isSorted<T>(xs: T[]): xs is SortedList<T> {
        for (let i = 1; i < xs.length; i++) {
            if (xs[i] < xs[i - 1]) return false;
        }
        return true;
    }

    //이진탐색은 sort가 이미 되어있는걸 가정함.
    function binarySearch<T>(xs: SortedList<T>, x: T): boolean {
        let low = 0;
        let high = xs.length - 1;

        while (high >= low) {
            const mid = low + Math.floor((high - low) / 2);
            const v = xs[mid];

            if (v === x) return true;

            [low, high] = x > v ? [mid + 1, high] : [low, mid - 1];
        }

        return false;
    }

    function f2(xs: any[], x: any) {
        if (isSorted(xs)) {
            xs;
            binarySearch(xs, x);
        }
        xs;
        binarySearch(xs, x);
    }

    /** 기타 상표붙이기 예 */
    type Meters = number & { _brand: 'meters' };
    type Seconds = number & { _brand: 'seconds' };

    const meters = (m: number) => m as Meters;
    const seconds = (s: number) => s as Seconds;

    const oneKm = meters(1000);
    const oneMin = seconds(60);

    const tenKm = oneKm * 10;
    const v = oneKm / oneMin;
});

/*
    - 타입스크립트는 구조적 타이핑을 사용하기 때문에, 값을 세밀하게 구분하지 못하는 경우가 있다.
      값을 구분하기 위해 공식명칭이 필요하면 상표를 붙이는것을 고려해야함.
    - 상표 기법은 타입 시스템에서 동작하지만 런타임에 상표를 검사하는 것과 동일한 효과를 얻을 수 있다.
*/
