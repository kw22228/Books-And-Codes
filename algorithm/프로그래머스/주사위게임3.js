const testcase = [
  //   { a: 2, b: 2, c: 2, d: 2 },
  //   { a: 4, b: 1, c: 4, d: 4 },
  //   { a: 6, b: 3, c: 3, d: 6 },
  { a: 2, b: 6, c: 6, d: 5 },
  //   { a: 6, b: 4, c: 2, d: 5 },
];

function solution(...args) {
  const numbersMap = new Map();
  args.forEach((arg) => {
    if (!numbersMap.has(arg)) {
      numbersMap.set(arg, 0);
    }

    numbersMap.set(arg, numbersMap.get(arg) + 1);
  });

  if (numbersMap.size === 1) {
    const [[p]] = [...numbersMap];
    return 1111 * p;
  }

  if (numbersMap.size === 2) {
    const [[p, pv], [q]] = [...numbersMap];

    return pv === 2 ? (p + q) * Math.abs(p - q) : (10 * p + q) ** 2;
  }

  if (numbersMap.size === 3) {
    const [[p], [q], [r]] = [...numbersMap].sort((a, b) => b[1] - a[1]);
    return q * r;
  }

  return Math.min(...[...numbersMap.keys()]);
}

for (const { a, b, c, d } of testcase) console.log(solution(a, b, c, d));
