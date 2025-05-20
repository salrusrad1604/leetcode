/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = Math.floor(0.5 * (l + r));

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const data = [[-1, 0, 3, 5, 9, 12], 9];
// const data = [[-1, 0, 3, 5, 9, 12], 2];

console.log(search(...data));
