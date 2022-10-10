let currentObserver = null;

export const observe = fn => {
    currentObserver = fn;
    fn();
    currentObserver = null;
};

// export const observable = obj => {
//     Object.keys(obj).forEach(key => {
//         let _value = obj[key];
//         const observers = new Set();

//         Object.defineProperty(obj, key, {
//             get() {
//                 if (currentObserver) observers.add(currentObserver);

//                 return _value;
//             },

//             set(value) {
//                 _value = value;
//                 observers.forEach(fn => fn());
//             },
//         });
//     });

//     return obj;
// };

export const observable = obj => {
    const observerMap = {};

    return new Proxy(obj, {
        get(target, name) {
            observerMap[name] = observerMap[name] || new Set();
            if (currentObserver) observerMap[name].add(currentObserver);

            return target[name];
        },

        set(target, name, value) {
            if (target[name] === value) return true;
            if (JSON.stringify(target[name]) === JSON.stringify(value)) return true;

            target[name] = value;
            observerMap[name].forEach(fn => fn());

            return true;
        },
    });
};
