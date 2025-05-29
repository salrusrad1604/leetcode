/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let count = 0;

  function dfs(city) {
    visited[city] = true;
    for (let j = 0; j < n; j++) {
      if (isConnected[city][j] && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count += 1;
    }
  }

  return count;
};

// const data = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];
const data = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(findCircleNum(data));
