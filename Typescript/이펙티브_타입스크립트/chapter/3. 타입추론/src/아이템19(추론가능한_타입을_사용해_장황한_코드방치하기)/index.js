import express from 'express';
(function () {
    //프로젝트내 변수 공유 체크로 인한 지역변수 사용.
    /** 변수 타입추론 (type declaration을 안해줘도 자동으로 잡혀있음.) */
    let xWithType = 12;
    let x = 12;
    /** 객체 타입추론 */
    const personWithType = {
        name: 'Sojourner Truth',
        born: {
            where: 'Swartekill, NY',
            when: 'c.1797',
        },
        died: {
            where: 'Battle Creek, MI',
            when: 'Nov, 26, 1883',
        },
    };
    const person = {
        name: 'Sojourner Truth',
        born: {
            where: 'Swartekill, NY',
            when: 'c.1797',
        },
        died: {
            where: 'Battle Creek, MI',
            when: 'Nov, 26, 1883',
        },
    };
    /** 배열의 타입추론 */
    function square(nums) {
        return nums.map(x => x * x);
    }
    const squares = square([1, 2, 3, 4]);
    /////////////////////////////////////////////
    const axis1 = 'x'; // string
    const axis2 = 'y'; // 'y'
    function logProduct(product) {
        const id = product.id; //타입선언으로 인해 추론이 되어지지않아 오류가 나고있음.
        const name = product.name;
        const price = product.price;
        console.log(id, name, price);
    }
    function logProduct2(product) {
        // const { id, name, price } = product; // 알아서 타입추론됨.
        const { id, name, price } = product; //아주 번잡한 코드가 되어버림.
        console.log(id, name, price);
    }
    /** 매개변수에 타입구문을 생략하는 경우 */
    function parseNumber(str, base = 10) { } //base 매개변수의 default값이 10(number)이기 떄문에 알아서 추론됨.
    const app = express();
    //Bad
    app.get('/health', (request, response) => {
        response.send('OK');
    });
    //Good
    app.get('/health', (request, response) => {
        response.send('OK');
    });
    /** 타입추론이 되는데도 타입을 명시하고 싶은 경우 */
    const elmo = {
        name: 'Tickle Me Elmo',
        id: '123',
        price: 28.99,
    }; //잉여 속성 체크가 동작함.
    const furby = {
        name: 'Furby',
        id: 123121353,
        price: 35,
    };
    logProduct2(furby);
    const furbyWithType = {
        name: 'Furby',
        id: '123121353',
        price: 35,
    };
    function getQuote(ticker) {
        return fetch(`https://quotes.example.com/?q=${ticker}`).then(response => response.json());
    }
    const cache = {};
    function getQuoteWithoutReturnType(ticker) {
        if (ticker in cache) {
            return cache[ticker]; //number타입으로 return
        }
        return fetch(`https://quotes.example.com/?q=${ticker}`)
            .then(response => response.json())
            .then(quote => {
            cache[ticker] = quote;
            return quote;
        });
    }
    getQuoteWithoutReturnType('MSFT').then('considerBuying');
    function getQuoteWithReturnType(ticker) {
        if (ticker in cache) {
            return Promise.resolve(cache[ticker]); //그냥 number타입이기때문에 Promise<number>에 들어올 수 없음.
        }
        return fetch(`https://quotes.example.com/?q=${ticker}`)
            .then(response => response.json())
            .then(quote => {
            cache[ticker] = quote;
            return quote;
        });
    }
    getQuoteWithReturnType('MSFT').then(console.log);
    function add(a, b) {
        return {
            x: a.x + b.x,
            y: a.y + b.y,
        };
    } // 반환타입이 Vector2D가 아니라 {x: number, y: number}이다. (명명되지 않음)
})();
/*
결론
1. 타입스크립트가 타입추론을 할 수 있다면, 굳이 타입구문을 작성할 필요가 없다.
2. 이상적인 경우는 함수/메서드의 시그니처에는 타입구문이 있지만, 함수내의 지역변수에는 타입 구문이 없다.
3. 추론될 수 있는 경우라도 객체 리터럴과 함수 반환에는 타입명시를 고려해야 한다.
*/
