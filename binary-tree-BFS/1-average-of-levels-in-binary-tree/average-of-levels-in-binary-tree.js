import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
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

  const res = [];

  for (let arr of map.values()) {
    res.push(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
  }

  return res;
};

// const data = arrToTreeNode([3, 9, 20, null, null, 15, 7]);
const data = arrToTreeNode([3, 9, 20, 15, 7]);

console.log(averageOfLevels(data));
