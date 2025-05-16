var threeSum = function (nums) {
    let resArr = [];

    if (!Array.isArray(nums)) return resArr;

    let n = nums.length;
    if (n < 3) return resArr;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i !== 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1,
            k = n - 1;

        while (j < k) {
            let target = nums[i] + nums[j] + nums[k];
            if (target == 0) {
                resArr.push([nums[i], nums[j], nums[k]]);
                j++, k--;

                while (j < k && nums[j] == nums[j - 1]) j++;

                while (j < k && nums[k] == nums[k + 1]) k--;
            } else if (target < 0) j++;
            else k--;
        }
    }
    return resArr;
};

// const arr = [-1,0,1,2,-1,-4] //=> [[-1,0,1],[-1,2,-1]]
// const arr = [0,1,1] //=> []
// const arr = [0,0,0] //=> [[0,0,0]]
const arr = [0, 3, 0, 1, 1, -1, -5, -5, 3, -3, -3, 0]; //=> [[ -3, 0,3 ],[-1,0,1 ],[0,0,0]]

console.log(...threeSum(arr));
