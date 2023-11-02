const testcase = [{ str: 'try hello world' }];

function solution(str) {
  return str
    .split(' ')
    .map(s =>
      s
        .split('')
        .map((s1, i) => (i % 2 === 0 ? s1.toUpperCase() : s1.toLowerCase()))
        .join('')
    )
    .join(' ');
}

for (const { str } of testcase) console.log(solution(str));
