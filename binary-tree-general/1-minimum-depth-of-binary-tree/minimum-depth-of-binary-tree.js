import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  const left = root.left;
  const right = root.right;

  if (!left) return 1 + minDepth(right);
  if (!right) return 1 + minDepth(left);

  return 1 + Math.min(minDepth(left), minDepth(right));
};

// const data = arrToTreeNode([3, 9, 20, null, null, 15, 7]);
// const data = arrToTreeNode([2, null, 3, null, 4, null, 5, null, 6]);
const data = arrToTreeNode([1, 2, 3, 4, 5]);

console.log(minDepth(data));
