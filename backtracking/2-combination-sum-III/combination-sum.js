/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];

  const sum = (curr, idx, arr) => {
    if (arr.length === k) {
      if (curr === n) {
        res.push([...arr]);
      }
      return;
    }

    for (let i = idx + 1; i < 10; i++) {
      if (curr + i <= n) {
        arr.push(i);
        sum(curr + i, i, arr);
        arr.pop();
      } else {
        break;
      }
    }
  };

  sum(0, 0, []);

  return res;
};

// const data = [3, 7];
const data = [3, 9];
// const data = [4, 1];

console.log(JSON.stringify(combinationSum3(...data)));
