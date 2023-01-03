const x = [1, 2, 3];
const one = '1';

console.log(x[1]);
console.log(x['1']);
console.log(x[one]);

const keys = Object.keys(x);
console.log(keys);

for (const key of keys) {
    console.log(typeof key);
}
