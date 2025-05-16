/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const obj = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (obj.has(nums[i]) && i - obj.get(nums[i]) <= k) {
            return true;
        } else {
            obj.set(nums[i], i);
        }
    }
    return false;
};

// const data = [[1, 2, 3, 1], 3];
// const data = [[1, 0, 1, 1], 1];
const data = [[1, 2, 3, 1, 2, 3], 2];


console.log(containsNearbyDuplicate(...data))
// nums[i] == nums[j] abs(i - j) <= k
