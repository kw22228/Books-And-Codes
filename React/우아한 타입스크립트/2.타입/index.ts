var name = 'zig';
var year = 2022;

const num: number = 123;
const str: string = 'abc';

function func(n: number) {
  return n;
}

func(num);
console.log(func(str));

function double(n: number) {
  return n * 2;
}

double(2);
double(`z`);
export {};
