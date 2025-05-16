import { TreeNode, arrToTreeNode } from '../../helpers/tree-helper.js';
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const count = [];

  const sums = (node, level) => {
    if (!node) return;

    const sum = (count[level] || 0) + node.val;
    count[level] = sum;

    sums(node.left, level + 1);
    sums(node.right, level + 1);
  };

  sums(root, 0);

  let max = -Infinity;
  return (
    count.reduce((acc, value, index) => {
      if (max < value) {
        max = value;
        return index;
      }
      return acc;
    }, null) + 1
  );
};

const data = arrToTreeNode([1, 7, 0, 7, -8, null, null]);
// const data = arrToTreeNode([989, null, 10250, 98693, -89388, null, null, null, -32127]);

console.log(maxLevelSum(data));
