import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

// const data = arrToTreeNode([1, 2, 3, 4, 5, 6]);
// const data = arrToTreeNode([]);
const data = arrToTreeNode([1]);

console.log(countNodes(data));
