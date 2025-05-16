import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null || q === null) {
    if (p === null && q === null) {
      return true;
    } else {
      return false;
    }
  }
  if (p.val !== q.val) {
    return false;
  }

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  return left && right;
};

const data = [arrToTreeNode([1, 2, 3]), arrToTreeNode([1, 2, 3])];
// const data = [arrToTreeNode([1, 2]), arrToTreeNode([1, null, 2])];
// const data = [arrToTreeNode([1,2,1]), arrToTreeNode([1,1,2])];

console.log(isSameTree(...data));
