/**
 * enum (열거형)
 * 문제점
 * 1. 숫자 열거형에 0, 1, 2 외의 다른 숫자가 할당되면 매우 위험하다.
 * 2. 상수 열거형은 보통의 열거형과 달리 런타임에 완전히 제거된다. (const enum Flaver로 바꾸면, 컴파일러는 Flavor.CHOCOLATE를 0으로 바꿔버린다.)
 * 3. preserveConstEnums 플래그를 설정한 상태의 상수 열거형은 보통의 열거형처럼 런타임 코드에 상수 열거형 정보를 유지한다.
 * 4. 문자열 열거형은 런타임의 타입 안정성과 투명성을 제공한다. 그러나 타입스크립트의 다른 타입과 달리 구조적 타이핑이 아닌 명목적 타이핑을 사용한다.
 */
enum Flavor {
  VANILLA = 0,
  CHOCOLATE = 1,
  STRAWBERRY = 2,
}

let flavor = Flavor.CHOCOLATE;
console.log(Flavor);
console.log(Flavor[0]);

enum FlavorStr {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
}
let flavorStr = FlavorStr.CHOCOLATE;
flavorStr = 'strawberry';
flavorStr = FlavorStr.VANILLA;

function scoop(flavor: FlavorStr) {}
scoop('vanilla'); // 명목적 타이핑
scoop(flavorStr);

/** 열거형 대신 쓰는 방법 */
type FlavorWithoutEnum = 'vanilla' | 'chocolate' | 'strawberry';
let flavorWithoutEnum: FlavorWithoutEnum = 'chocolate';
flavorWithoutEnum = 'mint chip';
flavorWithoutEnum = 'vanilla';

/**
 * 매개변수 속성
 * 문제점.
 * 1. 일반적으로 타입스크립트 컴파일은 타입 제거가 이루어지므로 코드가 줄어들지만, 매개변수 속성은 코드가 늘어나는 문법이다.
 * 2. 매개변수 속성이 런타임에는 실제로 사용되지만, 타입스크립트 관점에서는 사용되지 않는 것처럼 보입니다.
 * 3. 매개변수 속성과 일반 속성을 섞어서 사용하면 클래스의 설계가 혼란스러워진다.
 *
 * 매개변수 속성을 사용하려면 썼다 안썼다 하지말고 일관되게 쓰자.
 */
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class PersonSimple {
  constructor(public name: string) {} //매개변수 속성
}

class AnotherPerson {
  first: string;
  last: string;
  constructor(public name: string) {
    [this.first, this.last] = name.split(' ');
  }
} // 필드에 실제로는 fisrt, last, name 이 있지만, 보이기에는 first와 last만 보이기 때문에 혼란을 야기함 (문제점 3)
const ap = new AnotherPerson('kim jaewon');
console.log(ap);

const personSimple: PersonSimple = { name: 'Kim Jaewon' };

/** 네임스페이스와 트리플 슬래시 임포트 */
/// <reference path="./other.ts" />
// fooNamespace.bar();

/** 데코레이터 */
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @logged
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

function logged(target: any, name: string, descriptor: PropertyDescriptor) {
  const fn = target[name];
  descriptor.value = function () {
    console.log(`Calling ${name}`);
    return fn.apply(this, arguments);
  };
}

const greeter = new Greeter('Jaewon');
console.log(greeter.greet());

/*
    - 일반적으로 타입스크립트 코드에서 모든 타입 정보를 제거하면 자바스크립트가 되지만,
      열거형, 매개변수 속성, 트리플 슬래시 임포트, 데코레이터는 타입 정보를 제거한다고 자바스크립트가 되는건 아니다. (타입스크립트 코드이기 때문인거 같음)
    - 타입스크립트의 역할을 명확하게 하려면, 열거형, 매개변수 속성, 트리플 슬래시 임포트, 데코레이터는 사용하지 않는 것이 좋다.
*/
