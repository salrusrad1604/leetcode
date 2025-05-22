/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const add = (arr, curr) => {
    if (curr.size === arr.length) {
      res.push(Array.from(curr));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (curr.has(arr[i])) continue;
      5;

      curr.add(arr[i]);
      add(arr, curr);
      curr.delete(arr[i]);
    }
  };

  add(nums, new Set());

  return res;
};

const data = [1, 2, 3];
// const data = [0, 1];
// const data = [1]

console.log(JSON.stringify(permute(data)));
