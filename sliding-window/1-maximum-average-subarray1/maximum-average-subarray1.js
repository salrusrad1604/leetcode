/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let l = 0;
  let r = k;
  let max = 0;

  for (let i = 0; i < k; i++) {
    max += nums[i];
  }

  let curr = max;

  while (r < nums.length) {
    curr = curr - nums[l] + nums[r];
    max = Math.max(max, curr);
    l++;
    r++;
  }

  return max / k;
};

// const data = [[1, 12, -5, -6, 50, 3], 4];
// const data = [[0, 4, 0, 3, 2], 1];
const data = [[4, 2, 1, 3, 3], 2];
// const data = [[5], 1];

console.log(findMaxAverage(...data));
