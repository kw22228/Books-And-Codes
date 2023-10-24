const testcase = [
  { price: 3, money: 20, count: 4 }, //
];

function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return total > money ? total - money : 0;
}

for (const { price, money, count } of testcase) console.log(solution(price, money, count));
