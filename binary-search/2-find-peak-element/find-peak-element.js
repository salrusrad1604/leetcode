/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;

  if (len === 1) {
    return 0;
  }

  if (nums[0] > nums[1]) {
    return 0;
  }

  if (nums[len - 1] > nums[len - 2]) {
    return len - 1;
  }

  for (let i = 1; i < len - 1; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      return i;
    }
  }

  return null;
};

// const data = [1, 2, 3, 1];
const data = [1, 2, 1, 3, 5, 6, 4];

console.log(findPeakElement(data));
