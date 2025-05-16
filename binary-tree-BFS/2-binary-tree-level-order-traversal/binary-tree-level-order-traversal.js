import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const map = new Map();

  const count = (tree, level) => {
    if (!tree) {
      return;
    }

    if (map.has(level)) {
      map.get(level).push(tree.val);
    } else {
      map.set(level, [tree.val]);
    }

    tree.left && count(tree.left, level + 1);
    tree.right && count(tree.right, level + 1);
  };

  count(root, 0);

  return Array.from(map.values());
};

const data = arrToTreeNode([3, 9, 20, null, null, 15, 7]);
// const data = arrToTreeNode([1]);
// const data = arrToTreeNode([]);

console.log(JSON.stringify(levelOrder(data)));
