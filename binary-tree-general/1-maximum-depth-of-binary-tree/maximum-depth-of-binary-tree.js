import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};

const data = [3, 9, 20, null, null, 15, 7];
// const data = [1,null,2];

console.log(maxDepth(arrToTreeNode(data)));
