/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function (nums) {
  let num1 = Infinity;
  let num2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= num1) {
      num1 = nums[i];
    } else if (nums[i] <= num2) {
      num2 = nums[i];
    } else if (nums[i] > num2) {
      return true;
    }
  }

  return false;
};

// const data = [1, 2, 3, 4, 5];
// const data = [5, 4, 3, 2, 1];
// const data = [2, 1, 5, 0, 4, 6];
// const data = [20, 100, 10, 12, 5, 13];
const data = [4, 10, 5, 1, 2, 3, -9, -7, -10];
// const data = [1, 6, 2, 5, 1];

console.log(increasingTriplet(data));
