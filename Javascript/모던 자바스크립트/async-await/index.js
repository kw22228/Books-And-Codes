(async function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url);
    const todo = await response.json();

    console.log(todo);
})();

(async function foo() {
    const res = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(3), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    ]);

    console.log(res);
})();

(async function bar(n) {
    const a = await new Promise(resolve => setTimeout(() => resolve(n), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(a + 1), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(b + 1), 1000));

    console.log([a, b, c]);
})(1);
