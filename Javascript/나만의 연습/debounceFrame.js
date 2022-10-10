const debouncFrame = callback => {
    let currentCallback = -1;

    return () => {
        cancelAnimationFrame(currentCallback); // 현재 등록된 callback이 있으면 취소한다.
        currentCallback = requestAnimationFrame(callback); //1프레임 뒤에 실행되도록 한다.
    };
};

debouncFrame(() => console.log(1));
debouncFrame(() => console.log(2));
debouncFrame(() => console.log(3));
debouncFrame(() => console.log(4));
debouncFrame(() => console.log(5));
