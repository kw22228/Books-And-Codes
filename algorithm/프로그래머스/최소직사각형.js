const testcase = [
  {
    sizes: [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
  },
  {
    sizes: [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ],
  },
  {
    sizes: [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11],
    ],
  },
];

function solution(sizes) {
  const sortSizes = sizes.map(size => (size[0] < size[1] ? [size[1], size[0]] : size));
  return Math.max(...sortSizes.map(size => size[0])) * Math.max(...sortSizes.map(size => size[1]));
}

for (const { sizes } of testcase) console.log(solution(sizes));
