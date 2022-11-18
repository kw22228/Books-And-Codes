let requestingListener = null;

export const observe = cb => {
    requestingListener = cb;
    cb();
    requestingListener = null;
};

export const observable = obj => {
    const propsToListener = new Map();

    return new Proxy(obj, {
        get(target, prop) {
            if (!propsToListener.has(prop)) propsToListener.set(prop, new Set());
            if (requestingListener) propsToListener.get(prop).add(requestingListener);

            return target[prop];
        },
        set(target, prop, val) {
            if (target[prop] === val) return true;
            target[prop] = val;
            propsToListener.get(prop).forEach(cb => cb());

            return true;
        },
    });
};
