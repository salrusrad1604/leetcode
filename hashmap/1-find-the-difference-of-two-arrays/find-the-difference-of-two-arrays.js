/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let onlyIn1 = set1.difference(set2);
  let onlyIn2 = set2.difference(set1);

  return [[...onlyIn1.values()], [...onlyIn2.values()]];
};
const data = [
  [1, 2, 3],
  [2, 4, 6],
];
// const data = [
//   [1, 2, 3, 3],
//   [1, 1, 2, 2],
// ];

console.log(JSON.stringify(findDifference(...data)));
