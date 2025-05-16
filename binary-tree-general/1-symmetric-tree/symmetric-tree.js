import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

var isSame = function (leftroot, rightroot) {
  if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val)) return false;

  if (leftroot && rightroot) return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
  return true;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  return isSame(root.left, root.right);
};

// const data = arrToTreeNode([1, 2, 2, 3, 4, 4, 3]);
const data = arrToTreeNode([1, 2, 2, null, 3, null, 3]);

console.log(isSymmetric(data));
