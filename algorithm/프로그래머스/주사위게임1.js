const testcase = [
  { a: 3, b: 5 },
  { a: 6, b: 1 },
  { a: 2, b: 4 },
];

function solution(a, b) {
  if (a % 2 === 1 && b % 2 === 1) return a ** 2 + b ** 2;
  if (a % 2 === 0 && b % 2 === 0) return Math.abs(a - b);

  return 2 * (a + b);
}

for (const { a, b } of testcase) console.log(solution(a, b));
