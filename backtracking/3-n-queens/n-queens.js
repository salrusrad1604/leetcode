/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  const colArr = new Array(n).fill(false);
  const diag1 = new Array(2 * n - 1).fill(false);
  const diag2 = new Array(2 * n - 1).fill(false);

  const addQueen = (row, arr) => {
    if (row === n) {
      res.push([...arr]);

      return;
    }

    for (let col = 0; col < n; col++) {
      if (!colArr[col] && !diag1[row + col] && !diag2[row - col + n - 1]) {
        colArr[col] = true;
        diag1[col + row] = true;
        diag2[row - col + n - 1] = true;
        arr.push('.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1));
        addQueen(row + 1, arr);
        arr.pop();
        colArr[col] = false;
        diag1[col + row] = false;
        diag2[row - col + n - 1] = false;
      }
    }
  };
  addQueen(0, []);

  return res;
};

const data = 4;
// const data = 1;

console.log(JSON.stringify(solveNQueens(data)));
