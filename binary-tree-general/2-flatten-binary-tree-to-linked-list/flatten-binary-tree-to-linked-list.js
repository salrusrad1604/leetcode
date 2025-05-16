import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return null;
  }

  const set = new Set();

  const dest = tree => {
    set.add(tree);

    if (tree.left) dest(tree.left);
    if (tree.right) dest(tree.right);
  };

  dest(root);

  let curr = root;
  const arr = Array.from(set);

  for (let i = 1; i < arr.length; i++) {
    curr.right = arr[i];
    curr.left = null;
    curr = curr.right;
  }

  return root;
};

const data = arrToTreeNode([1, 2, 5, 3, 4, null, 6]);
// const data = arrToTreeNode([]);
// const data = arrToTreeNode([0]);

console.log(JSON.stringify(flatten(data)));
