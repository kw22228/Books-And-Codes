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
    constructor(name) {
        this.speed = 0;
        this.name = name + '부모';
    }

    run(speed) {
        this.speed = speed;
        console.log(this.speed);
    }
    stop() {
        console.log('부모쪽 메서드 실행');
        this.speed = 0;
        console.log(this.speed);
    }
}

class Rabbit extends Animal {
    // 자체 생성자가 없는 클래스를 상속받으면 자동으로 만들어짐. (생략)
    // constructor(...args) {
    //     super(...args);
    // }

    constructor(name, earLength) {
        super(name);
        this.speed = 0;
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
