const testcase = [
  { a: 2, b: 1, n: 20 },
  { a: 3, b: 1, n: 20 },
];

function solution(a, b, n) {
  function exchange(count, rest) {
    if (rest < a) return count;

    const cola = parseInt(rest / a) * b;
    return exchange(count + cola, cola + parseInt(rest % a));
  }

  return exchange(0, n);
}

for (const { a, b, n } of testcase) console.log(solution(a, b, n));
