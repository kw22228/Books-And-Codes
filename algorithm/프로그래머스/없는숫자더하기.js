const testcase = [
  { numbers: [1, 2, 3, 4, 6, 7, 8, 0] }, //
  { numbers: [5, 8, 4, 0, 6, 7, 9] },
];

function solution(numbers) {
  return 45 - numbers.reduce((pre, cur) => pre + cur, 0);
}

for (const { numbers } of testcase) console.log(solution(numbers));
