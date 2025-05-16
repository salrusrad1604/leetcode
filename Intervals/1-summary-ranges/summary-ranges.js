/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) return [];

    const res = [];

    let init = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] != 1) {
            if (init === i) {
                res.push(`${nums[i]}`);
            } else {
                res.push(`${nums[init]}->${nums[i]}`);
            }
            init = i + 1;
        }
    }

    if (init === nums.length - 1) {
        res.push(`${nums[init]}`);
    } else {
        res.push(`${nums[init]}->${nums[nums.length - 1]}`);
    }

    return res;
};

// const data = [0, 1, 2, 4, 5, 7];
const data = [0,2,3,4,6,8,9];

console.log(summaryRanges(data));
