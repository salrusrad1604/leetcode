import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];

  function generate_trees(start, end) {
    if (start > end) return [null];

    const all_trees = [];
    for (let i = start; i <= end; i++) {
      const left_trees = generate_trees(start, i - 1);
      const right_trees = generate_trees(i + 1, end);

      for (const l of left_trees) {
        for (const r of right_trees) {
          const current_tree = new TreeNode(i);
          current_tree.left = l;
          current_tree.right = r;
          all_trees.push(current_tree);
        }
      }
    }
    return all_trees;
  }

  return generate_trees(1, n);
};

const data = 3;
// const data = 1;

console.log(JSON.stringify(generateTrees(data)));
