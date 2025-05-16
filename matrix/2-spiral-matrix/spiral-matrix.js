/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const res = [];
    const n = matrix.length - 1;
    const m = matrix[0].length - 1;
    let circle = 0;

    while (circle < Math.min(Math.ceil((n + 1) / 2), Math.ceil((m + 1) / 2))) {
        for (let j = circle; j <= m - circle; j++) {
            res.push(matrix[circle][j]);
        }

        for (let i = circle + 1; i <= n - circle - 1; i++) {
            res.push(matrix[i][m - circle]);
        }

        if (n - circle === circle) {
            break;
        }

        for (let j = m - circle; j >= circle; j--) {
            res.push(matrix[n - circle][j]);
        }

        if (m - circle === circle) {
            break;
        }

        for (let i = n - circle - 1; i >= circle + 1; i--) {
            res.push(matrix[i][circle]);
        }

        circle++;
    }

    return res;
};

// const data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [11, 12, 13],
// ];
// const data = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ];

const data = [
    [1, 11],
    [2, 12],
    [3, 13],
    [4, 14],
    [5, 15],
    [6, 16],
    [7, 17],
    [8, 18],
    [9, 19],
    [10, 20],
];

// const data = [[7], [9], [6]];
console.log(spiralOrder(data));
