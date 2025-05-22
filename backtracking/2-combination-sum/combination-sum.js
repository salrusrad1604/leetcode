/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  const sumCheck = (curr, currSum, start) => {
    if (currSum === target) {
      res.push([...curr]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (currSum + candidates[i] <= target) {
        curr.push(candidates[i]);
        sumCheck(curr, currSum + candidates[i], i);
        curr.pop();
      }
    }
  };

  sumCheck([], 0, 0);

  return res;
};

const data = [[2, 3, 6, 7], 7];
// const data = [[2, 3, 5], 8];
// const data = [[2], 1];

console.log(JSON.stringify(combinationSum(...data)));
