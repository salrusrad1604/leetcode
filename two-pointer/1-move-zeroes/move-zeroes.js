/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      k++;
    }
  }
};

const data = [0, 1, 0, 3, 12];
// const data = [0]

moveZeroes(data);
console.log(data);
