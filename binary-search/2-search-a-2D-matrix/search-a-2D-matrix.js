/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  const search = (l, r) => {
    if (l > r) {
      return false;
    }
    const mid = Math.floor(0.5 * (r + l));
    const i = Math.floor(mid / m);
    const j = mid % m;

    if (matrix[i][j] < target) {
      return search(mid + 1, r);
    } else if (matrix[i][j] > target) {
      return search(l, mid - 1);
    } else {
      return true;
    }
  };

  return search(0, n * m - 1);
};

const data = [
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3,
];
// const data = [
//   [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ],
//   13,
// ];

console.log(searchMatrix(...data));
