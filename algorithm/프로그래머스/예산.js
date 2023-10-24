const testcase = [
  { d: [1, 3, 2, 5, 4], budget: 9 },
  //   { d: [2, 2, 3, 3], budget: 10 },
];

function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b).reduce((pre, cur) => {
    const result = pre - cur;
    if (result >= 0) count++;

    return result;
  }, budget);

  return count;
}

for (const { d, budget } of testcase) console.log(solution(d, budget));
