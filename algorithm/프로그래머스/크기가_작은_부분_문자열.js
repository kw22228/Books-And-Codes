const testcase = [{ t: '3141592', p: '271' }];

function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (parseInt(p) >= parseInt(t.slice(i, i + p.length))) answer++;
  }

  return answer;
}

for (const { t, p } of testcase) console.log(solution(t, p));
