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
        get(target, prop) {
            observerMap[prop] = observerMap[prop] || new Set();
            if (currentObserver) observerMap[prop].add(currentObserver);

            return target[prop];
        },

        set(target, prop, value) {
            if (target[prop] === value) return true;
            if (JSON.stringify(target[prop]) === JSON.stringify(value)) return true;

            target[prop] = value;
            observerMap[prop].forEach(fn => fn());

            return true;
        },
    });
};
