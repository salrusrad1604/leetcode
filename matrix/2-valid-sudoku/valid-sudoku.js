/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const block  = new Set();
    const row = new Set();
    const col = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') continue;

            const rowstr = `${i}${board[i][j]}`
            const coltr = `${j}${board[i][j]}`
            const blockstr = `${Math.floor(i/3)}${Math.floor(j/3)}${board[i][j]}`

            if (
                row.has(rowstr) ||
                col.has(coltr) ||
                block.has(blockstr)
            ) {
                return false;
            }

            block.add(blockstr);
            row.add(rowstr);
            col.add(coltr);
        }
    }
    return true;
};

const data = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// const data = [
//     ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//     ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//     ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//     ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//     ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//     ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//     ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//     ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//     ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

console.log(isValidSudoku(data))
