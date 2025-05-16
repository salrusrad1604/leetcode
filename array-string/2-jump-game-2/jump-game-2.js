var jump = function (nums) {
    let index = 0;
    let count = 0;
    let step = nums[0];

    if (nums.length === 1) {
        return 0;
    }

    if (step >= nums.length - 1) {
        return 1;
    }

    while (index < nums.length - 1) {
        let promStep = null;
        let promStepIndex = null;
        let promIndex = index;

        if (step >= nums.length - index - 1) {
            count++;
            break;
        }
        for (let i = 1; i <= step; i++) {
            if ((promStep || step) - (i - (promStepIndex || 0) ) <= nums[index + i]) {
                promStep = nums[index + i];
                promIndex = index + i;
                promStepIndex = i;
            }
        }

        if (!promStep) {
            return 0;
        }

        step = promStep;
        index = promIndex;

        count++;
    }
    return count;
};

// const arr = [2,3,1,1,4]; //=> 2
// const arr = [2,3,0,1,4]; //=> 2
// const arr = [2,3,1]; // => 1
// const arr = [0]; // => 0
// const arr = [1]; // => 0
// const arr = [1,2,3,4]; //=> 2
// const arr = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]; //=> 2
// const arr = [1,3,2]; //=> 2
// const arr = [4,1,1,3,1,1,1]; => 2
// console.log(jump(arr));

arrays = [
    [2, 3, 1, 1, 4],
    [2, 3, 0, 1, 4],
    [2, 3, 1],
    [0],
    [1],
    [1, 2, 3, 4],
    [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3],
    [1, 3, 2],
    [4, 1, 1, 3, 1, 1, 1],
];

console.log(arrays.map((v) => jump(v)));
