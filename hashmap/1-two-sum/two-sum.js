/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const obj = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (obj.has(target - nums[i])) {
            return [obj.get(target - nums[i]), i];
        }
        obj.set(nums[i], i);
    }
};

// const data = [[2, 7, 11, 15], 9];
// const data = [[3, 2, 4], 6];
const data = [[3, 3], 6];
console.log(twoSum(...data));
