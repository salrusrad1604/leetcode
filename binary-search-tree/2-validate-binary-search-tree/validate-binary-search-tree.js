import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  return helper(root, -Infinity, Infinity);
}

function helper(node, min, max) {
  if (node === null) return true;
  if (node.val <= min || node.val >= max) return false;

  return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}

const data = arrToTreeNode([2, 1, 3]);
// const data = arrToTreeNode([5,1,4,null,null,3,6]);

console.log(isValidBST(data));
