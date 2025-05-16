var removeDuplicates = function (nums) {
    let isDuoble = false;
    let i = 1;
    while (i < nums.length) {
        if (nums[i - 1] === nums[i]) {
            if (isDuoble) {
                nums.splice(i, 1);
            } else {
                isDuoble = true;
                i++;
            }
        } else {
            isDuoble = false;
            i++;
        }
        console.log(i, nums, nums[i - 1], nums[i], isDuoble);
    }
};

const arr = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// const arr = [1, 1, 1, 2, 2, 3];
removeDuplicates(arr);
console.log(arr);
