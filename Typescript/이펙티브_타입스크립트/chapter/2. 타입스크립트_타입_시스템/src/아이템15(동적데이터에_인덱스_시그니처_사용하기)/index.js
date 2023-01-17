"use strict";
const rocket = {
    name: 'Falcon 9',
    variant: 'v1.0',
    thrust: '4,940 kN',
};
const falconHeavy = {
    name: 'Falcon Heavy',
    variant: 'v1',
    thrust: 15200,
};
// 동적 데이터를 표현할때는 인덱스 시그니처를 사용한다.
function parseCSV(input) {
    const lines = input.split('\n');
    const [header, ...rows] = lines;
    const headerColumns = header.split(',');
    return rows.map(rowStr => {
        const row = {}; //동적으로 key값을 생성
        rowStr.split(',').forEach((cell, i) => {
            row[headerColumns[i]] = cell;
        });
        return row;
    });
}
const products = parseCSV(csvData);
/** 좀더 안전한 방법(undefined 추가) */
function safeParseCsv(input) {
    return parseCSV(input);
}
const rows = parseCSV(csvData);
const prices = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}
const safeRows = safeParseCsv(csvData);
for (const row of safeRows) {
    prices[row.productId] = Number(row.price); //undefined가 들어오는걸 체크
}
