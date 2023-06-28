interface Duck {
  quack(): void;
  fly(): void;
}
class MallarDuck implements Duck {
  quack(): void {
    console.log('꽥');
  }
  fly(): void {
    console.log('날고 있어요!!');
  }
}

//새로운 인터페이스 등장 !!
interface Turkey {
  gobble(): void;
  fly(): void;
}
class WildTurkey implements Turkey {
  gobble(): void {
    console.log('골골');
  }
  fly(): void {
    console.log('짧은 거리를 날고 있어요 !!');
  }
}

// 어뎁터 생성
class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
class DuckAdapter implements Turkey {
  duck: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  gobble(): void {
    this.duck.quack();
  }

  fly(): void {
    this.duck.fly();
  }
}

const duck = new MallarDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

duck.quack();
turkey.gobble();
turkeyAdapter.quack();
