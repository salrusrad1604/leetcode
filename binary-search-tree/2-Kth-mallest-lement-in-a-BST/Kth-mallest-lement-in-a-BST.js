import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let val = null;

  const search = tree => {
    if (val != null) {
      return;
    }

    const left = tree.left;
    const right = tree.right;

    left && search(left);
    if (++count === k) {
      val = tree.val;
      return;
    }
    right && search(right);
  };

  search(root);

  return val;
};

const data = [arrToTreeNode([3, 1, 8, null, 2]), 4];
// const data = [arrToTreeNode([5, 3, 6, 2, 4, null, null, 1]), 3];

console.log(kthSmallest(...data));
