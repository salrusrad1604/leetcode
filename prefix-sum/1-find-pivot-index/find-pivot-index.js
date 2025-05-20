/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  let res = -1;
  let lsum = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    let rsum = total - lsum - nums[i];
    if (lsum == rsum) {
      res = i;
      break;
    }
    lsum += nums[i];
  }
  return res;
};

// const data = [1, 7, 3, 6, 5, 6];
// const data = [1, 2, 3];
const data = [2, 1, -1];
// const data = [-1, -1, 0, 0, -1, -1];
// const data = [-1, -1, 0, 1, 1, 0];
console.log(pivotIndex(data));
