import { TreeNode, arrToTreeNode } from '../../helpers/tree-helper.js';
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const treeLeaf = (root, arr) => {
    if (!root.left && !root.right) {
      return arr.push(root.val);
    }

    root.left && treeLeaf(root.left, arr);
    root.right && treeLeaf(root.right, arr);
  };

  const arr1 = [];
  const arr2 = [];

  treeLeaf(root1, arr1);
  treeLeaf(root2, arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// const data = [
//   arrToTreeNode([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
//   arrToTreeNode([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]),
// ];

const data = [arrToTreeNode([1, 2, 3]), arrToTreeNode([1, 3, 2])];

console.log(leafSimilar(...data));
