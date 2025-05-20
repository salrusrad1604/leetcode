/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const arr = [];

  const add = start => {
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      arr.push(i);
      add(i + 1);
      arr.pop();
    }
  };

  add(1);
  return res;
};

const data = [4, 2];
// const data = [1, 1];

console.log(JSON.stringify(combine(...data)));
