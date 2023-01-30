/**
 *  이번 아이템은 이해를 제대로 하지 못했습니다.
 *  따라서, 같이 책을 보면서 진행했으면 좋겠습니다.
 */

import { Geometry } from 'geojson';

(function () {
    /** 함수의 반환값과 관련된 unknown */
    function parseYAML(yaml: string): any {
        const line = yaml.split('\n');

        const obj: { [key: string]: string } = {};
        line.forEach(str => {
            if (str.trim()) {
                const [key, value] = str.split(':');
                obj[key.trim()] = value.trim();
            }
        });

        return obj;
    }

    interface Book {
        name: string;
        author: string;
        title: string;
    }
    const book: Book = parseYAML(`
        name: Wuthering Heights
        author: Emily Bronte
    `);
    alert(book.title); // undefined나옴
    // book('read');

    function safeParseYAML(yaml: string): unknown {
        return parseYAML(yaml);
    }
    const safeBook = safeParseYAML(`
        name: Wuthering Heights
        author: Emily Bronte
    `);
    alert(safeBook.title);

    /** 변수선언과 관련된 unknown (어떤 값이 있지만 그 타입을 모르는경우에 unknown을 사용) */
    interface Feature {
        id?: string | number;
        geometry: Geometry;
        properties: unknown;
    }

    function processValue(val: unknown) {
        // instanceof를 통해 원하는 타입으로 변환 (unknown -> Date)
        if (val instanceof Date) {
            val;
        }
    }

    function isBook(val: unknown): val is Book {
        return typeof val === 'object' && val !== null && 'name' in val && 'author' in val;
    }
    function processValueWithBook(val: unknown) {
        if (isBook(val)) {
            val; // Book
        }
    }

    function safeParseYAMLWithUnknown<T>(yaml: string): T {
        return parseYAML(yaml);
    }
})();

/*
    - unknown은 any대신 사용할 수 잇는 안전한 타입이다. 어떠한 값이 있지만 그 타입을 알지 못하는 경우라면 unknown을 사용하면 된다.
    - 사용자가 타입 단언문이나 타입 체크를 사용하도록 강제하려면 unknown을 사용하면 된다.
    - {}, object, unknown의 차이점을 이해해야 한다.
*/
