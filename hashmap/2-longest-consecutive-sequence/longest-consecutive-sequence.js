/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let length = 1;

            while (numSet.has(n + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;    
};

const data = [100, 4, 200, 1, 3, 2];
// const data = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const data = [1, 0, 1, 2];


console.log(longestConsecutive(data))