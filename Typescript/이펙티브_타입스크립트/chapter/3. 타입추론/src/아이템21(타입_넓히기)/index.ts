(function () {
  //프로젝트내 변수 공유 체크로 인한 지역변수 사용.

  interface Vector3D {
    x: number;
    y: number;
    z: number;
  }
  function getComponent(vector: Vector3D, axis: 'x' | 'y' | 'z') {
    return vector[axis];
  }
  let x = 'x';
  let vec = { x: 10, y: 20, z: 30 };
  getComponent(vec, x); // x가 x y z의 유니온타입이 아닌 string으로 추론되어 오류나고있다.

  const xWithConst = 'x'; // unit타입으로 잡혀있음 (const로 선언시 더좁은 타입이 됨.)
  getComponent(vec, xWithConst);

  const mixed = ['x', 1]; //집합 후보들 -> ('x' | 1)[], ['x', 1], [string, number], readonly[string, number] 등..

  //////////////////////////////////////

  const v = { x: 1 };
  v.x = 3;
  v.x = '3'; //x는 이미 number
  v.y = 4; //y라는 프로퍼티 없음
  v.name = 'Pythagoras'; //name이라는 프로퍼티 없음

  /** 타입스크립트의 기본 동작을 재정의하기 */
  //1. 명시적 타입 구문을 제공
  const v2: { x: 1 | 3 | 5 } = { x: 1 };

  //2. 타입체커에 추가적인 문맥 제공

  //3. const 단언문을 사용하기 (변수를 선언하는 const 아님.) - 타입을 최대한 좁은 타입으로 추론한다.
  const k1 = { x: 1, y: 2 };
  const k2 = { x: 1 as const, y: 2 }; // const단언문으로 x의 타입이 1로 좁혀짐
  const k3 = { x: 1, y: 2 } as const; // const단언문으로 readonly로 좁힘.

  const a1 = [1, 2, 3];
  const a2 = [1, 2, 3] as const; // const단언문으로 number배열이엿던 타입을 readonly 튜플 타입으로 좁힘.
})();
/*
타입 넓히기란?
    변수의 타입을 명시하지 않으면 타입체커는 타입을 결정해야한다.
    즉, 지정된 값을 가지고 할당가능한 값들의 집합을 '추론' 해야 한다. 
    이과정을 넓히기라고한다.

요약.
1. 타입스크립트는 넓히기를 통해 타입을 추론한다.
2. 동작에 영향을 줄 수 있는 const 선언문, 타입 구문 문맥, as const 단언문에 익숙해져야한다.
*/
