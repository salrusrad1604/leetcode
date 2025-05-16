import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const arr = [];

  const symm = tree => {
    if (!tree) {
      return;
    }
    const left = tree.left;
    const right = tree.right;

    if (left) {
      symm(left);
    }
    arr.push(tree.val);
    if (right) {
      symm(right);
    }
  };

  symm(root);

  return arr;
};

const data = arrToTreeNode([1, null, 2, 3]);
// const data = arrToTreeNode([1,2,3,4,5,null,8,null,null,6,7,9]);
// const data = arrToTreeNode([]);
// const data = arrToTreeNode([1]);

console.log(inorderTraversal(data));
