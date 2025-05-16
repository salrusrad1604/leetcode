import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) {
    return 0;
  }

  const constructString = (tree, prom) => {
    if (!tree.left && !tree.right) {
      return +(prom + `${tree.val}`);
    }

    return (
      (tree.left ? constructString(tree.left, prom + `${tree.val}`) : 0) +
      (tree.right ? constructString(tree.right, prom + `${tree.val}`) : 0)
    );
  };

  return constructString(root, "");
};

const data = arrToTreeNode([1, 2, 3]);
// const data = arrToTreeNode([4, 9, 0, 5, 1]);

console.log(sumNumbers(data));
