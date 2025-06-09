/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const res = new Array(n + 1).fill(0);
  res[0] = 1;
  res[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      res[i] += res[j] * res[i - j - 1];
    }
  }

  return res[n];
};

const data = 3;
// const data = 1;

console.log(numTrees(data));
