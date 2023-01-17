"use strict";
(function () {
    const obj = {
        x: 1,
        y: 2,
    };
    function func(obj) {
        const { x } = obj;
        obj.x = 3;
        console.log(x, obj.x);
    }
    func(obj);
})();
