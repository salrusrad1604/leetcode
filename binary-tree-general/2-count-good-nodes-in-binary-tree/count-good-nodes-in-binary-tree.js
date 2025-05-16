import { arrToTreeNode, TreeNode } from '../../helpers/tree-helper.js';
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  const count = (node, max) => {
    if (!node) {
      return 0;
    }

    const isGood = node.val >= max ? 1 : 0;
    const newMax = Math.max(node.val, max);

    return isGood + count(node.left, newMax) + count(node.right, newMax);
  };

  return count(root, root.val);
};

const data = arrToTreeNode([3, 1, 4, 3, null, 1, 5]);
// const data = arrToTreeNode([2, null, 4, 10, 8, null, null, 4]);
// const data = arrToTreeNode([3, 3, null, 4, 2]);
// const data = arrToTreeNode([1]);

console.log(goodNodes(data));
