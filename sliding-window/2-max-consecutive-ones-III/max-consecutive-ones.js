/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const zeros = [];

  let r = 0;

  while (zeros.length < k && r < nums.length) {
    if (!nums[r]) {
      zeros.push(r);
    }
    r++;
  }

  let res = r;
  let l = 0;

  while (r < nums.length) {
    if (!nums[r]) {
      zeros.push(r);
    }

    l = zeros[zeros.length - k - 1] ?? -1;
    res = res < r - l ? r - l : res;

    r++;
  }

  return res;
};

// const data = [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2];
// const data = [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3];
const data = [[1, 1, 0, 1], 1];
// const data = [[0, 0, 0, 0], 0];
console.log(longestOnes(...data));
