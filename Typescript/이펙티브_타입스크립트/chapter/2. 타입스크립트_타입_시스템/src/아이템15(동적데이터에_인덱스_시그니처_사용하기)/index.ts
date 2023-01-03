/** 인덱스 시그니처를 통해 유연한 매핑 */
type Rocket = {
    [property: string]: string;
};
const rocket: Rocket = {
    name: 'Falcon 9',
    variant: 'v1.0',
    thrust: '4,940 kN',
};
/** 인덱스 시그니처를 통해 유연한 매핑 */

/** 인덱스 시그니처를 사용해야 하는경우 (열 이름이 무엇인지 모를때)*/
interface IRocket {
    name: string;
    variant: string;
    thrust: number;
}
const falconHeavy: IRocket = {
    name: 'Falcon Heavy',
    variant: 'v1',
    thrust: 15_200,
};

// 동적 데이터를 표현할때는 인덱스 시그니처를 사용한다.
function parseCSV(input: string): { [columnName: string]: string }[] {
    const lines = input.split('\n');
    const [header, ...rows] = lines;
    const headerColumns = header.split(',');

    return rows.map(rowStr => {
        const row: { [columnName: string]: string } = {}; //동적으로 key값을 생성
        rowStr.split(',').forEach((cell, i) => {
            row[headerColumns[i]] = cell;
        });

        return row;
    });
}
/** 인덱스 시그니처를 사용해야 하는경우 (열 이름이 무엇인지 모를때)*/

interface ProductRow {
    productId: string;
    name: string;
    price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

/** 좀더 안전한 방법(undefined 추가) */
function safeParseCsv(input: string): { [columnName: string]: string | undefined }[] {
    return parseCSV(input);
}
const rows = parseCSV(csvData);
const prices: { [product: string]: number } = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}

const safeRows = safeParseCsv(csvData);
for (const row of safeRows) {
    prices[row.productId] = Number(row.price); //undefined가 들어오는걸 체크
}
/** 좀더 안전한 방법(undefined 추가) */

/** 인덱스 시그니처로 모델링 하지 말아야하는 경우 */
//Bad (너무 광범위)
interface Row1 {
    [column: string]: number;
}
//Best (가장 최선)
interface Row2 {
    a: number;
    b?: number;
    c?: number;
    d?: number;
}
//(가장 정확하지만 사용하기 번거롭)
type Row3 =
    | { a: number }
    | { a: number; b: number }
    | { a: number; b: number; c: number }
    | { a: number; b: number; c: number; d: number };
/** 인덱스 시그니처로 모델링 하지 말아야하는 경우 */

/** Record 연산자를 사용하여 키타입에 유연성을 제공 */
type Vec3D = Record<'x' | 'y' | 'z', number>;
type IFieldValue = {
    name: string;
    value: number;
};
type IFormName = 'event' | 'point';
type IRecord = Record<IFormName, IFieldValue>;

type Vec3D_2 = { [k in 'x' | 'y' | 'z']: number };
type ABC = { [k in 'a' | 'b' | 'c']: k extends 'b' ? string : number };
