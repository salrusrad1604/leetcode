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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};

const data = [arrToTreeNode([4, 2, 7, 1, 3]), 2];
// const data = [arrToTreeNode([4, 2, 7, 1, 3]), 5];

console.log(searchBST(...data));
