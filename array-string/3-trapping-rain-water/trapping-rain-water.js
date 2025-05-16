/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0,
        maxRight = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            // Check maxLeft
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            // Check maxRight
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += maxRight - height[right];
            }
            right--;
        }
    }

    return totalWater;
};

const data = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const data = [4, 2, 0, 3, 2, 5];

console.log(trap(data));
