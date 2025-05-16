import { TreeNode, arrToTreeNode } from '../../helpers/tree-helper.js';

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  const countMax = (node, side, count) => {
    if (!node) return count;

    return Math.max(countMax(node.left, 'l', side === 'r' ? count + 1 : 0), countMax(node.right, 'r', side === 'l' ? count + 1 : 0));
  };

  return countMax(root, null, 0);
};

// const data = arrToTreeNode([1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]);
const data = arrToTreeNode([1, 1, 1, null, 1, null, null, 1, 1, null, 1]);
// const data = arrToTreeNode([1]);

console.log(longestZigZag(data));
