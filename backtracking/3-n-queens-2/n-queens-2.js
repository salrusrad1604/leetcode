/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let res = 0;
  const colArr = new Array(n).fill(false);
  const diag1 = new Array(2 * n - 1).fill(false);
  const diag2 = new Array(2 * n - 1).fill(false);

  const addQueen = row => {
    if (row === n) {
      res++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!colArr[col] && !diag1[row + col] && !diag2[row - col + n - 1]) {
        colArr[col] = true;
        diag1[col + row] = true;
        diag2[row - col + n - 1] = true;
        addQueen(row + 1);
        colArr[col] = false;
        diag1[col + row] = false;
        diag2[row - col + n - 1] = false;
      }
    }
  };
  addQueen(0);
  return res;
};

const data = 2;
// const data = 1;
// const data = 9;

console.log(totalNQueens(data));
