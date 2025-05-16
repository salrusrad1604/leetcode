/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  result = [points[0]];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.min(points[i][1], result[result.length - 1][1]);
      continue;
    }

    result.push(points[i]);
  }

  return result.length;
};

const data = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]; // => 2
// const data = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ]; => 4
// const data = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ]; // => 2
// const data = [
//   [3, 9],
//   [7, 12],
//   [3, 8],
//   [6, 8],
//   [9, 10],
//   [2, 9],
//   [0, 9],
//   [3, 9],
//   [0, 6],
//   [2, 8],
// ]; // => 2

console.log(findMinArrowShots(data));
