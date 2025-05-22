/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const n = board.length;
  const m = board[0].length;

  const check = (i, j) => {
    if (j < 0 || i < 0 || j > m - 1 || i > n - 1 || board[i][j] !== 'O') return;

    board[i][j] = 'Y';
    check(i, j - 1);
    check(i, j + 1);
    check(i + 1, j);
    check(i - 1, j);
  };

  for (let i = 0; i < n; i++) {
    check(i, 0);
    check(i, m - 1);
  }
  for (let j = 0; j < m; j++) {
    check(0, j);
    check(n - 1, j);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === 'Y') {
        board[i][j] = 'O';
      }
    }
  }
};

// const data = [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X'],
// ];
// const data = [['X']];
const data = [
  ['O', 'O', 'O', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'O'],
];
console.log(JSON.stringify(data));
solve(data);
console.log(JSON.stringify(data));
