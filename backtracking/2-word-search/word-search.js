/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  const n = board.length;
  const m = board[0].length;

  search = (curr, i, j) => {
    const letter = board[i][j];

    if (curr === word) {
      return true;
    }

    board[i][j] = ''; // Маркеруем как посещеную клетку

    const left = j - 1 >= 0 && board[i][j - 1] === word[curr.length] && search(curr + word[curr.length], i, j - 1);
    const right = j + 1 < m && board[i][j + 1] === word[curr.length] && search(curr + word[curr.length], i, j + 1);
    const bottom = i - 1 >= 0 && board[i - 1][j] === word[curr.length] && search(curr + word[curr.length], i - 1, j);
    const top = i + 1 < n && board[i + 1][j] === word[curr.length] && search(curr + word[curr.length], i + 1, j);

    board[i][j] = letter;

    return left || right || bottom || top;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === word[0] && search(board[i][j], i, j)) {
        return true;
      }
    }
  }

  return false;
};

// const data = [
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E'],
//   ],
//   'ABCB',
// ];
// const data = [
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E'],
//   ],
//   'ABCCED',
// ];
// const data = [
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E'],
//   ],
//   'SEE',
// ];

const data = [
  [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ],
  'AAB',
];

console.log(exist(...data));
