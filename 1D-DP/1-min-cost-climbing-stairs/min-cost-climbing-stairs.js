/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let arr = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    arr[i] = Math.min(arr[i - 1] + cost[i - 1], arr[i - 2] + cost[i - 2]);
  }
  return arr[n];
};

const data = [10, 15, 20];
// const data = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(data));
