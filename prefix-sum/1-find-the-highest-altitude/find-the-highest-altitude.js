/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let res = 0;
  let curr = 0;

  for (let i = 0; i < gain.length; i++) {
    curr += gain[i];
    res = Math.max(curr, res);
  }

  return res;
};

// const data = [-5, 1, 5, 0, -7];
const data = [-4, -3, -2, -1, 4, 3, 2];

console.log(largestAltitude(data));
