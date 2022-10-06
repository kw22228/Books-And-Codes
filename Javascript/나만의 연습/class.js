// class Car {
//     constructor(modelName, modelYear, type, price) {
//         this.modelName = modelName;
//         this.modelYear = modelYear;
//         this.type = type;
//         this.price = price;
//     }
// }

// class ElectricCar extends Car {
//     constructor(modelName, modelYear, price, chargeTime) {
//         super(modelName, modelYear, 'e', price);
//         this.chargeTime = chargeTime;
//     }
// }

// const ionic = new ElectricCar('ionic', '2020', 5000, 200);

class Animal {
    _speed;

    constructor(name) {
        this._speed = 0;
        this.name = name + '부모';
    }

    run(speed) {
        this._speed = speed;
        console.log(this.speed);
    }
    stop() {
        console.log('부모쪽 메서드 실행');
        this._speed = 0;
        console.log(this.speed);
    }

    static init() {
        this._speed = 0;
        console.log('init');
    }

    get speed() {
        return this._speed;
    }
}

class Rabbit extends Animal {
    // 자체 생성자가 없는 클래스를 상속받으면 자동으로 만들어짐. (생략)
    // constructor(...args) {
    //     super(...args);
    // }

    constructor(name, earLength) {
        super(name);
        // this.name = name + '자식';
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} 이 숨었다.`);
    }

    stop() {
        console.log('자식 메서드 실행');
        super.stop();
        this.hide();
    }
}

const rabbit = new Rabbit('흰 토끼');
// rabbit.hide();

rabbit.stop();

console.log(rabbit.name);

const anim1 = new Animal('동물1');
const anim2 = new Animal('동물2');

anim1.run(2);
anim2.run(5);

console.log(anim1.speed);
console.log(anim2.speed);

Animal.init();

console.log(anim1.speed);
console.log(anim2.speed);
