const testcase = [{ arr: [4, 3, 2, 1] }, { arr: [10] }];

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return arr.length === 0 ? [-1] : arr;
}

for (const { arr } of testcase) console.log(solution(arr));
