var canJump = function (nums) {
    let index = 0;
    let step = nums[0];
    while (index < nums.length - 1) {
        step--;

        if (nums[index] > step) {
            step = nums[index];
        }
        if (step === 0) {
            break;
        }
        index++;
    }
    return index === nums.length - 1;
};

const jumps = [3, 2, 1, 0, 4];
// const jumps = [0, 1];
// const jumps = [2, 3, 1, 1, 4];
// const jumps = [1,2,3];

console.log(canJump(jumps));
