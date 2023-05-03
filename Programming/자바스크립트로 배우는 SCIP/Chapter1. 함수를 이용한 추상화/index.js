function calc() {
  return 5 + 4 + (2 - (3 - (6 + 4 / 5))) / (3 * (6 - 2) * (2 - 7));
}

console.log(calc());

function minimizeNum(a, b, c) {
  const min = Math.min(...arguments);

  let isSearch = false;
  let result = 0;
  for (const x of arguments) {
    if (!isSearch && x === min) {
      isSearch = true;
      continue;
    }

    result += x ** 2;
  }

  return result;
}

console.log(minimizeNum(1, 2, 3));

// p68. 연습문제 1.5
function p() {
  return p();
}
function test(x, y) {
  return x === 0 ? 0 : y;
}
// test(0, p());
// 정상 순서 평가일때는 함수내부에 진입하여 전개 후 축약 하기 때문에 0이 나오지만,
// 인수 우선 평가일때는 함수 호출전 인수에서 계산이되고 인자로 넘겨지기 때문에 무한루프가 나옴. (자바스크립트 언어는 인수 우선평가이다)
