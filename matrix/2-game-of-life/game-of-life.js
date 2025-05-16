/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const change = Array.from({ length: board.length }, (v) => new Array());

    const condtion = (i, j) => {
        let count = 0;
        const isLife = board[i][j];

        vary = [i - 1, i, i + 1];
        varx = [j - 1, j, j + 1];

        for (let y of vary) {
            for (let x of varx) {
                if (
                    x < 0 ||
                    y < 0 ||
                    x > board[0].length - 1 ||
                    y > board.length - 1 ||
                    (y === i && x === j)
                ) {
                    continue;
                }
                if (board[y][x]) {
                    count++;
                }
            }
            if (count > 3) {
                break;
            }
        }

        if (isLife) {
            if (count < 2 || count > 3) {
                return true;
            }
        } else {
            if (count === 3) {
                return true;
            }
        }

        return false;
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            change[i].push(condtion(i, j));
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (change[i][j]) {
                board[i][j] ? (board[i][j] = 0) : (board[i][j] = 1);
            }
        }
    }
};

// const data = [
//     [0, 1, 0],
//     [0, 0, 1],
//     [1, 1, 1],
//     [0, 0, 0],
// ];
const data = [
    [1, 1],
    [1, 0],
];

gameOfLife(data);

data.forEach((v) => console.log(v));
