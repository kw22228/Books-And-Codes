/*
 n! = n(n-1)!
 선형 재귀적 과정
 - 먼저 완전히 전개 된 후에 최종 결과를 향해 축약되는 형태 (전개 후 축약)
   - 전개는 계산적 과정이 지연된 연산들의 사슬(재귀적 과정) 을 구축 (factorial 함수를 계속 호출)
   - 축약은 지연연산들이 실제로 수행됨에 따라 일어남.
*/
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

/* 
  선형 반복적 과정 (단계가 n에 비례함 : 선형)
  - 전개나 축약이 되지않는다. 즉, 지연되는 과정이없다.
  - 해석기는 각각에 들어오는 매개변수(product, counter, max_count)의 값만 알면된다.
 */
function factorial2(n) {
  return fact_iter(1, 1, n);
}
function fact_iter(product, counter, max_count) {
  return counter > max_count ? product : fact_iter(product * counter, counter + 1, max_count);
}

console.log(factorial(6));
console.log(factorial2(6));

/*
  재귀적 과정 vs 반복적 과정
  - 반복적 과정은 상태 변수들은 임의 시점에서 매개변수로 다 가지고 있기 때문에 중간에 실행을 멈춰도 그 시점부터 이어서 진행할 수 있다.
  - 재귀과정에서는 그럴수없다.
    재귀과정에서의 상태 정보들은 해석기가 가지고있고 그것을 체인처럼 처리해야 하기 때문이다.
*/

/////////////////////////////////////////////////////////////////////////////////

/* 
  트리 재귀 (피보나치)
  - 계산이 너무나도 많이 중복되기 때문에 좋은 방법이 아니긴함.
*/
function fibonacci(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);
}

/*
  선형 반복적 과정 (피보나치)
*/
function fib(n) {
  return fib_iter(1, 0, n);
}
function fib_iter(a, b, count) {
  return count === 0 ? b : fib_iter(a + b, a, count - 1);
}
