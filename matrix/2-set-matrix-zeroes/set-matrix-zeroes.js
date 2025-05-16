/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rowset = new Set();
    const colset = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                rowset.add(i);
                colset.add(j);
            }
        }
    }

    for (let row of rowset) {
        for (let j = 0; j < matrix[row].length; j++) {
            matrix[row][j] = 0;
        }
    }

    for (let col of colset) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }
};

const data = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];
// const data = [
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
// ];

setZeroes(data);

console.log(data.forEach((v) => console.log(v)));
