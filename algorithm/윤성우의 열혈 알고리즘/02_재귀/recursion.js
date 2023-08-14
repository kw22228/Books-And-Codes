function Recursive(num) {
  if (num <= 0) return;

  console.log('recursive call!!');
  Recursive(num - 1);
}

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

function fibonachi(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fibonachi(n - 1) + fibonachi(n - 2);
}

function BsearchRecursive(arr, first, last, target) {
  if (first > last) return -1;
  let mid = (first + last) / 2;

  if (arr[mid] === target) return mid;
  if (target < arr[mid]) return BsearchRecursive(arr, first, mid - 1, target);

  return BsearchRecursive(arr, mid + 1, last, target);
}

function hanoiTowerMove(num, from, by, to) {
  if (num === 1) return '';

  hanoiTowerMove(num - 1, from, to, by);

  hanoiTowerMove(num - 1, by, from, to);
}
