import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (!root) return 0;

  let res = root.val;

  const helper = tree => {
    if (!tree) {
      return 0;
    }

    const leftSum = helper(tree.left);
    const rightSum = helper(tree.right);
    res = Math.max(res, tree.val + leftSum + rightSum);
    return Math.max(0, tree.val + leftSum, tree.val + rightSum);
  };

  helper(root);

  return res;
};

// var maxPathSum = function (root) {
//   var max = -Infinity;
//   getMaxSum(root);
//   return max;

//   function getMaxSum(node) {
//     if (!node) return 0;
//     let leftSum = getMaxSum(node.left);
//     let rightSum = getMaxSum(node.right);
//     max = Math.max(max, node.val + leftSum + rightSum);
//     return Math.max(0, node.val + leftSum, node.val + rightSum);
//   }
// };

// const data = arrToTreeNode([1, 2, 3]); // => 6;
// const data = arrToTreeNode([-10, 9, 20, null, null, 15, 7]); // => 42;
const data = arrToTreeNode([9, 6, -3, null, null, -6, 2, null, null, 2, null, -6, -6, -6]);

console.log(maxPathSum(data));
