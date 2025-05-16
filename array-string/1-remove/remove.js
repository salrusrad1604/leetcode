var removeDuplicates = function (nums) {
    let count = 1;
    let i = 1;
    while (i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i - 1, 1);
        } else {
            count++;
            i++;
        }
    }
    return count;
};

// const arr1 = [1, 1, 2];
const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr1), arr1);
