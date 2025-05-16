import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  const summ = (tree, currSum) => {
    currSum = currSum + tree.val;

    if (!tree.left && !tree.right) {
      return currSum === targetSum;
    }

    return (tree.left ? summ(tree.left, currSum) : false) || (tree.right ? summ(tree.right, currSum) : false);
  };

  return summ(root, 0);
};

// const data = [
//     arrToTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
//     22,
// ];
// const data = [arrToTreeNode([1, 2, 3]), 5];
// const data = [arrToTreeNode([]), 0];
const data = [arrToTreeNode([1, 2]), 1];

console.log(hasPathSum(...data));
