/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        if (numbers[l] + numbers[r] < target) {
            l++;
        } else if (numbers[l] + numbers[r] > target) {
            r--;
        } else {
            return [l + 1, r + 1];
        }
    }
};

const data = [[2, 7, 11, 15], 9];
// const data = [[2,3,4], 6];
// const data = [[-1,0], -1];

console.log(JSON.stringify(twoSum(...data)));
