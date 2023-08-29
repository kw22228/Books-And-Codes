const testcase = [
  { a: 2, b: 6, c: 1 },
  { a: 5, b: 3, c: 3 },
  { a: 4, b: 4, c: 4 },
];

function solution(a, b, c) {
  if (a !== b && b !== c && c !== a) return a + b + c;
  if (a === b && b === c && c === a)
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);

  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}

for (const { a, b, c } of testcase) console.log(solution(a, b, c));
