/*
    let이나 const는 렉시컬 스코프인 반면,
    this는 다이나믹 스코프다. 다이나믹 스코프는 '정의된' 방식이 아니라 '호출된' 방식을 따른다.
    this는 전형적으로 객체의 현재 인스턴스를 참조하는 클래스에서 가장많이 쓰인다.
*/

// class Ccls {
//   vals = [1, 2, 3];

//   logSquares() {
//     for (const val of this.vals) {
//       console.log(val * val);
//     }
//   }
// }

// const c = new Ccls();
// c.logSquares();

// const method = c.logSquares;
// method(); // this -> undefined     this는 호출할 때 바인딩 됨.
// method.call(c);

// /** DOM에서의 this 바인딩 */
// document.querySelector('input')!.addEventListener('change', function (e) {
//   console.log(this); // 이벤트가 발생한 input 엘리먼트 출력
// });

class ResetButton {
  name;
  constructor(name) {
    this.name = name;
  }

  render() {
    // return makeButton({ text: 'Reset', onClick: this.onClick });
  }
  onClick(this: ResetButton) {
    console.log(this.name);
  }
}

const reset = new ResetButton('jw');
reset.onClick();

function addKeyListener(el: HTMLElement, fn: (this: HTMLElement, e: KeyboardEvent) => void) {
  el.addEventListener('keydown', e => {
    fn.call(el, e); // 정상
    const fn2 = fn.bind(el, e);
    fn(el, e);
    fn(e);
  });
}

declare let htmlEl: HTMLElement;
addKeyListener(htmlEl, function (e) {
  this.innerHTML;
});

///////////////////////////////////////////////////////
class Foo {
  registerHandler(el: HTMLElement) {
    addKeyListener(el, e => {
      this.innerHTML;
    });
  }
}
