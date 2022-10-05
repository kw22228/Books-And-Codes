function slow(x) {
    alert(`slow(${x})를 호출함.`);

    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

const cachingSlow = cachingDecorator(slow);
console.log(cachingSlow(1));
console.log(cachingSlow(1));
