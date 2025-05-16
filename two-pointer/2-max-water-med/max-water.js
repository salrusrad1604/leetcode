var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while (l < r) {
        max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
        if(height[l] > height[r]) {
            r--;
        }else {
            l++;
        }
    }
    return max;
};

const arr = [1, 8, 2, 2, 5, 4, 8, 3, 7];
// const arr = [1,1]

console.log(maxArea(arr));
