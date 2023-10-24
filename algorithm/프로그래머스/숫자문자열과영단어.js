const testcase = [
  { s: 'one4seveneight' },
  { s: '23four5six7' },
  { s: '2three45sixseven' },
  { s: '123' },
];

function solution(s) {
  const stringNumberMapper = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = s;
  stringNumberMapper.forEach((str, number) => {
    result = result.split(str).join(number);
  });

  return parseInt(result);
}

for (const { s } of testcase) console.log(solution(s));
