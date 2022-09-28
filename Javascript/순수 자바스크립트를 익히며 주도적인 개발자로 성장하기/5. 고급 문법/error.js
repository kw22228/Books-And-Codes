try {
    nonExistFunction();
} catch (e) {
    console.log(e);
} finally {
    console.log('무조건 실행');
}
