test('getAuthors', () => {
    const authors = getAuthors({
        runQuery(sql: string) {
            return [
                ['Toni', 'Morrison'],
                ['Maya', 'Angelou'],
            ];
        },
    });
    expect(authors).toEqual([
        { first: 'Toni', last: 'Morrison' },
        { first: 'Maya', last: 'Angelou' },
    ]);
});
