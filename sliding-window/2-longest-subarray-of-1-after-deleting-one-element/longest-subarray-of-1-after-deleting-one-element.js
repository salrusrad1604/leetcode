/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const n = nums.length;
  let l = 0;
  let zeroCount = 0;
  let maxLength = 0;

  for (let r = 0; r < n; r++) {
    if (nums[r] === 0) {
      zeroCount++;
    }
    while (zeroCount > 1) {
      if (nums[l] === 0) {
        zeroCount--;
      }
      l++;
    }
    maxLength = Math.max(maxLength, r - l);
  }
  return maxLength;
};

// const data = [1, 1, 0, 1];
// const data = [0, 1, 1, 1, 0, 1, 1, 0, 1];
// const data = [1, 1, 1];
// const data = [1, 1, 0, 0, 1, 1, 1, 0, 1];
const data = [1, 0, 0, 0, 0];

console.log(longestSubarray(data));
