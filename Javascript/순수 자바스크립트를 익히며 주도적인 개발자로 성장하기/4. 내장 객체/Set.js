let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 중복

console.log(mySet.size);
console.log(mySet.has(2));
console.log(mySet.has(4));

mySet.delete(2);
console.log(mySet.size);
console.log(mySet.has(2));

mySet.clear();
console.log(mySet.size);

const userMap = new Map();
userMap.set('name', '홍길동');
userMap.set('email', 'abc@naver.com');
userMap.set('phone', '010-0000-0000');

console.log(userMap);

for (let x of userMap) {
    console.log(x);
}
