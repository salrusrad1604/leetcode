import { TreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const node = new TreeNode(nums[mid]);

  node.left = sortedArrayToBST(nums, left, mid - 1);
  node.right = sortedArrayToBST(nums, mid + 1, right);

  return node;
};
// const array = [-10, -3, 0, 5, 9];
const array = [1, 3];

console.log(JSON.stringify(sortedArrayToBST(array)));
