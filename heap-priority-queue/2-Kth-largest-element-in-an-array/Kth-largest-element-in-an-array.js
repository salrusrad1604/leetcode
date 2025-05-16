/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Реализация QuickSelect
var findKthLargest = function (nums, k) {
  const mid = Math.floor(0.5 * (nums.length - 1));
  const left = [];
  const middle = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[mid] > nums[i]) {
      left.push(nums[i]);
    } else if (nums[mid] < nums[i]) {
      right.push(nums[i]);
    } else {
      middle.push(nums[i]);
    }
  }

  if (right.length >= k) {
    return findKthLargest(right, k);
  }

  if (right.length < k && right.length + middle.length >= k) {
    return nums[mid];
  }

  if (right.length < k) {
    return findKthLargest(left, k - right.length - middle.length);
  }
};

// const data = [[3, 2, 1, 5, 6, 4], 2]; // => 5
// const data = [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4]; // => 4
// const data = [[2, 1], 2];
const data = [[-1, 2, 0], 2];

console.log(findKthLargest(...data));
