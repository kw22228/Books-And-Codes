/*
  이진 탐색 알고리즘
  - 조건1. 배열에 저장된 데이터는 정렬되어 있어야 한다.

  실행
  - 배열의 처음과 끝을 합하여 2로 나눈 index의 값이 target인지 확인
  - 아니라면 현재 index와 target의 대소 비교를 한다.
  - 작다면 0 ~ 현재 index - 1의 값을 다시 돌림.
  - 크다면 index + 1 ~ 끝의 값을 다시 돌림


  ### 시간 복잡도
  - 최악의 경우(worst case)
    - n이 1이 되기까지 2로 나눈횟수 k회, 따라서 비교연산 k회
    - 데이터가 1개 남았을때, 마지막으로 비교연산 1회
    즉, T(n) = k + 1;
    여기서 k를 구하기 위해 n이 1이 되기까지 k를 2로 나눠야하니
    n * (1/2)^n = 1 => n * 2^-k = 1 => n = 2^k => log2n = log2*2^k => log2n = klog2*2 => log2n = k
    T(n) = log2n (+1은 중요하지 않기때문에 생략)
*/

function bSearch(arr, len, target) {
  let first = 0;
  let last = len - 1;
  let mid;
  let opCount = 0;

  while (first <= last) {
    mid = Math.floor((first + last) / 2);

    if (target === arr[mid]) return mid;

    if (target < arr[mid]) last = mid - 1;
    else first = mid + 1;

    opCount++;
  }

  console.log(opCount);

  return -1;
}

const arr = [1, 3, 5, 7, 9];
const idx = bSearch(arr, arr.length, 7);
console.log(idx);
