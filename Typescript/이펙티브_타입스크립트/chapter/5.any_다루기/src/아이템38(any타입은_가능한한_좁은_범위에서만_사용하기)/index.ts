(function () {
    interface Bar {
        bar: string;
    }
    interface Foo {
        foo: string;
    }
    function expressionReturningFoo(): Foo {
        const foo = 'foo';
        return { foo };
    }
    function processBar(b: Bar) {}

    function f() {
        const x = expressionReturningFoo();
        processBar(x); //Bar형식에 x(Foo)형식이 들어갈 수 없음.
    }

    /** 안좋은 방법 (x는 모든 함수에 전부 any로 들어감, any를 return을 할때는 더 문제.)*/
    function f1() {
        const x: any = expressionReturningFoo();
        processBar(x);
        return x;
    }
    /** 차라리 나은 방법 (x가 processBar의 argument로 들어갈때만 any 즉, 다른 함수에는 영향을 미치지 않는다.)*/
    function f2() {
        const x = expressionReturningFoo();
        processBar(x as any);
        return x;
    }
    /** @ts-ignore를 통한 오류 무시 */
    function f3() {
        const x = expressionReturningFoo();

        //@ts-ignore
        processBar(x);
        return x;
    }

    function g() {
        const foo = f1(); // foo가 any를 리턴받아버림.
        foo;

        const foo2 = f2();
        foo2; //Foo타입으로 들어옴

        const foo3 = f3();
        foo3;
    }

    ////////////////////////////////////////////////////////////////////
    interface Config {
        a: number;
        b: number;
        c: {
            key: number;
        };
    }

    const config: Config = {
        a: 1,
        b: 2,
        c: {
            key: 'value',
        },
    };

    /** 안좋은 방법. any 단언문으로 오류 제거 (key를 없애기위해 config전체를 any로 지정해줘서 오류대상이 아닌 a와 b도 같이 타입체크가 되지 않는다.) */
    const config2: Config = {
        a: 1,
        b: 2,
        c: {
            key: 'value',
        },
    } as any;

    /** 그나마 나은 방법. (오류가 나는 key프로퍼티만 any로 타입무시) */
    const config3: Config = {
        a: 1,
        b: 2,
        c: {
            key: 'value' as any,
        },
    };
})();
/*
    - 의도치 않은 타입 안전성의 손실을 피하기 위해서 any의 사용 범위를 최소한으로 좁혀야 한다.
    - 함수의 반환 타입이 any인 경우 타입 안정성이 나빠진다. 따라서 any타입을 반환하면 절대 안됨.
    - 강제로 타입 오류를 제거하려면 any 대신 @ts-ignore를 사용하는게 좋다.
*/
