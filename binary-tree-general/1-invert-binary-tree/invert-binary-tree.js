import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  const left = root.left;
  root.left = root.right;
  root.right = left;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const data = [4, 2, 7, 1, 3, 6, 9];
// const data = [2,1,3];
// const data = [];

console.log(JSON.stringify(invertTree(arrToTreeNode(data))));
