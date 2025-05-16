/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;
    const arr = Array.from({ length: n }, (v) => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[j][n - i - 1] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = arr[i][j];
            
        }
    }
};

// const data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
const data = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];

rotate(data);
