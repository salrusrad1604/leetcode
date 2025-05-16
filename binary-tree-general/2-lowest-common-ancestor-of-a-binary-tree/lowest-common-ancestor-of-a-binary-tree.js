import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;
  return left !== null ? left : right;
};

// const data = [arrToTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 1];
// const data = [arrToTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 4];
const data = [arrToTreeNode([1, 2]), 1, 2];

console.log(JSON.stringify(lowestCommonAncestor(...data)));
