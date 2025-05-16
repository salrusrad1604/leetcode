/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { arrToTreeNode } from '../../helpers/tree-helper.js';

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return null;
  }
  function getMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    const minNode = getMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  return root;
};
// const data = [arrToTreeNode([5, 3, 6, 2, 4, null, 7]), 3];
// const data = [arrToTreeNode([5, 3, 6, 2, 4, null, 7]), 0];
// const data = [arrToTreeNode([]), 0];
// const data = [arrToTreeNode([5, 3, 6, 2, 4, null, 7]), 5];
const data = [arrToTreeNode([50, 30, 70, null, 40, 60, 80]), 50];
console.log(JSON.stringify(deleteNode(...data)));
