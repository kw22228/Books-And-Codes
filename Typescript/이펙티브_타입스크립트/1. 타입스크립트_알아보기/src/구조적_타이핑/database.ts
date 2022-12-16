interface Author {
    first: string;
    last: string;
}
function getAuthors(database: any): Author[] {
    const authorRows: any[] = database.runQuery('SELECT FIRST, LAST FROM AUTHORS');
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}

// 구조적 타이핑을 이용하여 더 구체적인 인터페이스를 정의하는게 더 낫다.
interface DB {
    runQuery: (sql: string) => any[];
}
function getAuthorsDB(database: DB): Author[] {
    const authorRows = database.runQuery('SELECT FRIST, LAST FROM AUTHROS');
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}
