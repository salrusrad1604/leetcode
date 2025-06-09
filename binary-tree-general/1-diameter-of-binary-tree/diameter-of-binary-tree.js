import { TreeNode, arrToTreeNode } from '../../helpers/tree-helper.js';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  const diameter = node => {
    if (!node) return 0;
    const left = diameter(node.left, res);
    const right = diameter(node.right, res);

    res = Math.max(res, left + right);

    return Math.max(left, right) + 1;
  };

  let res = 0;
  diameter(root, res);
  return res;
};

const data = arrToTreeNode([1, 2, 3, 4, 5]);
// const data = arrToTreeNode([1, 2]);

console.log(diameterOfBinaryTree(data));
