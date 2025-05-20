/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(v => v + extraCandies >= max);
};

const data = [[2, 3, 5, 1, 3], 3];
// const data = [[4, 2, 1, 1, 2], 1];
// const data = [[12, 1, 12], 10];

console.log(kidsWithCandies(...data));
