var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n;

    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
const arr = [-1, -100, 3, 99];
const k = 2;

rotate(arr, k);
console.log(arr);
