var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/** 타입오류가 있는 코드도 컴파일 가능. */
var hello = 'hello';
hello = 1234; //string -> number 타입오류
function calculateArea(shape) {
    // 런타임시에는 값으로 취급
    // if (shape instanceof Rectangle) {
    //     return shape.width * shape.height; // shape는 Square일수도 Rectangle일수도
    // } else {
    //     return shape.width * shape.width;
    // }
    //shape에 'height'라는 props가있으면
    if ('height' in shape) {
        shape;
        return shape.width * shape.height;
    }
    else {
        shape;
        return shape.width * shape.width;
    }
}
function calculateArea2(shape) {
    if (shape.kind === 'rectangle') {
        shape;
        return shape.width * shape.height;
    }
    shape;
    return shape.width * shape.width;
}
var shape = {
    kind: 'square',
    width: 80
};
calculateArea2(shape);
////////////////////////// 클래스 (값으로도 타입으로도 사용가능)
var SquareClass = /** @class */ (function () {
    function SquareClass(width) {
        this.width = width;
    }
    return SquareClass;
}());
var RectangleClass = /** @class */ (function (_super) {
    __extends(RectangleClass, _super);
    function RectangleClass(width, height) {
        var _this = _super.call(this, width) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return RectangleClass;
}(SquareClass));
function calculateArea3(shape) {
    if (shape instanceof RectangleClass) {
        shape;
        return shape.width * shape.height;
    }
    shape;
    return shape.width * shape.width;
}
/** 타입연산은 런타임에 영향을 주지 않는다. */
function asNumber(val) {
    return val; //string으로 넘어와도 타입체크 통과 (그냥 string을 return할 가능성)
}
function asNumber2(val) {
    return typeof val === 'string' ? Number(val) : val;
}
/** 런타임 타입은 선언된 타입과 다를 수 있다. */
function setLightSwitch(value) {
    switch (value) {
        case true:
            //불켜기
            break;
        case false:
            //불끄기
            break;
        default:
            console.log('실행이 될까?');
    }
}
function setLight() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/light')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    setLightSwitch(result.lightSwitchValue);
                    return [2 /*return*/];
            }
        });
    });
}
function add5(a, b) {
    return a + b;
}
var three = add5(1, 2); //타입이 number
var eleven = add5('1', '1'); //타입이 string
