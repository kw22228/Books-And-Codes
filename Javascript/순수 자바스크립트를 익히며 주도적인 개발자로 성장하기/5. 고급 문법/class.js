class Car {
    #modelName;
    #modelYear;
    #type;
    #price;

    constructor(modelName, modelYear, type, price) {
        this.#modelName = modelName;
        this.#modelYear = modelYear;
        this.#type = type;
        this.#price = price;
    }

    get modelName() {
        return this.#modelName;
    }

    set modelName(modelName) {
        this.#modelName = modelName;
    }
}

// const ionic = new Car('아이오닉', 2021, 'e', 4000);
// const genesis = new Car('제네시스', 2021, 'g', 7000);

// console.log(ionic.modelName);

// ionic.modelName = '아이오닉6';
// console.log(ionic.modelName);

class ElectricCar extends Car {
    #chargeTime;
    constructor(modelName, modelYear, type, price, chargeTime) {
        super(modelName, modelYear, type, price);
        this.#chargeTime = chargeTime;
    }

    get chargeTime() {
        return this.#chargeTime;
    }

    set chargeTime(chargeTime) {
        this.#chargeTime = chargeTime;
    }
}

const ionic = new ElectricCar('아이오닉', 2021, 'e', 4000, 3);

console.log(ionic);
console.log(ionic.modelName);
ionic.chargeTime = 5;
console.log(ionic.chargeTime);
