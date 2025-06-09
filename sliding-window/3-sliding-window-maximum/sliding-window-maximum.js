/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const q = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push(i);
    if (q[0] === i - k) q.shift();
    if (i >= k - 1) res.push(nums[q[0]]);
  }
  return res;
};
// const data = [[1, 3, -1, -3, 5, 3, 6, 7], 3]; // => [3,3,5,5,6,7]
const data = [[1, -1], 1]; // => [1, - 1]
// const data = [[1], 1];

console.log(JSON.stringify(maxSlidingWindow(...data)));

//  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
//
//  i  Window position             Monotonic queue  max
//  0                              [1]              -
//  1                              [3]              -
//  2  [1  3  -1] -3  5  3  6  7   [3, -1]          3
//  3   1 [3  -1  -3] 5  3  6  7   [3, -1, -3]      3
//  4   1  3 [-1  -3  5] 3  6  7   [5]              5
//  5   1  3  -1 [-3  5  3] 6  7   [5, 3]           5
//  6   1  3  -1  -3 [5  3  6] 7   [6]              6
//  7   1  3  -1  -3  5 [3  6  7]  [7]              7

//  nums = [1, 3, -1, 8, 5, 3, 6, 7], k = 3
//
//  i  Window position            Monotonic queue  max
//  0                             [1]              -
//  1                             [3]              -
//  2  [1  3  -1] 8  5  3  6  7   [3, -1]          3
//  3   1 [3  -1  8] 5  3  6  7   [8]              8
//  4   1  3 [-1  8  5] 3  6  7   [8, 5]           5
//  5   1  3  -1 [8  5  3] 6  7   [8, 5, 3]        5
//  6   1  3  -1  8 [5  3  6] 7   [6]              6
//  7   1  3  -1  8  5 [3  6  7]  [7]
