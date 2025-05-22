/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(0.5 * (left + right));

    if (nums[mid] == target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
const data = [[4, 5, 6, 7, 0, 1, 2], 6];
// const data = [[4, 5, 6, 7, 0, 1, 2], 3];
// const data = [[1], 0];
// const data = [[4, 5, 6, 7, 8, 1, 2, 3], 8];

console.log(search(...data));
