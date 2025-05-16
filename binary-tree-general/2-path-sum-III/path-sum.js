import { TreeNode, arrToTreeNode } from '../../helpers/tree-helper.js';

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  let count = 0;

  const sumCount = (node, sum) => {
    if (!node) return;

    const newSum = sum + node.val;

    if (newSum === targetSum) {
      count++;
    }

    sumCount(node.left, newSum);
    sumCount(node.right, newSum);
  };

  sumCount(root, 0);

  return count + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};

// const data = [arrToTreeNode([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8];
// const data = [arrToTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22];
const data = [arrToTreeNode([1, null, 2, null, 3, null, 4, null, 5]), 3];

console.log(pathSum(...data));
