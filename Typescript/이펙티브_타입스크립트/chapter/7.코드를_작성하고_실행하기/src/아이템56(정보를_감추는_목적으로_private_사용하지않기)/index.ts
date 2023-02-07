(function () {
  class Foo {
    _private = 'secret123';
  }

  const f = new Foo();
  f._private; // 컨벤션일뿐 진짜로 숨겨지진않음.

  /** 타입스크립트에서는? */
  class Diary {
    private secret = 'cheated on my English test';
  }
  const diary = new Diary();
  console.log(diary.secret); //private속성으로 제어되고있지만 컴파일후엔 제어x
  console.log((diary as any).secret);
  // 단순히 정보를 감추기위해 private을 사용하지 말자

  /** 정보를 감추기 위해서는 클로저가 더 효과적임 */
  class PasswordChecker {
    checkPassword: (password: string) => boolean;

    //passwordHash 변수에 접근 불가능
    constructor(passwordHash: number) {
      this.checkPassword = (password: string) => {
        return hash(password) === passwordHash;
      };
    }
  }
  const checker = new PasswordChecker(hash('s3cret'));
  checker.checkPassword('s3cret');

  /** Javascript의 #을 사용한 private */
  class PasswordCheckerWithHash {
    #passwordHash: number;

    constructor(passwordHash: number) {
      this.#passwordHash = passwordHash;
    }

    checkPassword(password: string) {
      return hash(password) === this.#passwordHash;
    }
  }
  const checkerWithHash = new PasswordCheckerWithHash(hash('s3cret'));
  checkerWithHash.checkPassword('secret');
  checkerWithHash.checkPassword('s3cret');
})();
declare function hash(text: string): number;

/*
    - public, protected, private 접근 제어자는 타입 시스템에서만 강제될 뿐이다.
      런타임에는 소용이 없으며 단언문을 통해 우회할 수 있다.
      접근제어자로 데이터를 감추려고 해서는 안된다.
      
    - 확실히 데이터를 감추고 싶다면 클로저를 사용해야한다. (메모리 문제와 완전히 비공개 데이터라 데이터를 공유할 수 없다는 문제점이 있다.)
*/
