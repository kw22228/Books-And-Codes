function containsEven(arr: number[][]) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] % 2 === 0) return true;
    }
  }

  return false;
}

function minimum(arr: number[][]) {
  let result = Number.POSITIVE_INFINITY;

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      result = Math.min(arr[x][y], result);
    }
  }

  return result;
}
