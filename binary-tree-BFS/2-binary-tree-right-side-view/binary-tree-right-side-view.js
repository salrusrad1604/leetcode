import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const map = new Map();

  const helper = (tree, level) => {
    if (!tree) {
      return;
    }

    if (!map.has(level)) {
      map.set(level, tree.val);
    }

    tree.right && helper(tree.right, level + 1);
    tree.left && helper(tree.left, level + 1);
  };

  helper(root, 0);

  return Array.from(map.values());
};

const data = arrToTreeNode([1, 2, 3, null, 5, null, 4]);
// const data = arrToTreeNode([1, 2, 3, 4, null, null, null, 5]);
// const data = arrToTreeNode([1, null, 3]);
// const data = arrToTreeNode([]);

console.log(rightSideView(data));
