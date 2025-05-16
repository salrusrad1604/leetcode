/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (!nums.length) {
        return 0;
    }

    let res = Infinity;
    let promres = nums[0];

    let l = 0;
    let r = 0;

    while (l < nums.length && !(r === nums.length - 1 && promres < target)) {
        if (promres < target) {
            if (r < nums.length - 1) {
                r++;
                promres = promres + nums[r];
            }
            continue;
        }

        res = Math.min(r - l + 1, res);
        promres = promres - nums[l];
        l++;
    }

    return res === Infinity ? 0 : res;
};

// const data = [7, [2, 3, 1, 2, 4, 3]];
// const data = [4, [1, 4, 4]];
// const data = [11, [1, 1, 1, 1, 1, 1, 1, 1]];
const data = [11, [1, 2, 3, 4, 5]];

console.log(minSubArrayLen(...data));
