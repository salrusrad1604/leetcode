/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const row = new Map();
  const colArray = Array.from({ length: grid[0].length }, e => Array());
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    row.set(JSON.stringify(grid[i]), (row.get(JSON.stringify(grid[i])) || 0) + 1);

    for (let j = 0; j < grid[i].length; j++) {
      colArray[j].push(grid[i][j]);
    }
  }

  for (let i = 0; i < colArray.length; i++) {
    const value = JSON.stringify(colArray[i]);
    if (row.has(value)) {
      res += row.get(value);
    }
  }

  return res;
};

// const data = [
//   [3, 2, 1],
//   [1, 7, 6],
//   [2, 7, 7],
// ];
const data = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

console.log(equalPairs(data));
