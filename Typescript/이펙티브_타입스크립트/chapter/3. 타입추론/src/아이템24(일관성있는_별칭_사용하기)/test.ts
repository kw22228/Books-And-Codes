(function () {
    interface In {
        x: number;
        y: number;
    }
    const obj = {
        x: 1,
        y: 2,
    };

    function func(obj: In) {
        const { x } = obj;

        obj.x = 3;
        console.log(x, obj.x);
    }

    func(obj);
})();
