var majorityElement = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    const res = {};
    for (let i = 0; i < nums.length; i++) {
        const select = nums[i];
        if (res[select]) {
            res[select] = res[select] + 1;
            if (res[select] > Math.floor(nums.length / 2)) {
                return select;
            }
        } else {
            res[select] = 1;
        }
    }
};

// const arr = [3, 2, 3];
const arr = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(arr));
