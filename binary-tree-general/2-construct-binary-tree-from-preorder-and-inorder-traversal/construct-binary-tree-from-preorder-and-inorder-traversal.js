import { TreeNode } from "../../helpers/tree-helper.js";

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let p = 0;
  let i = 0;

  const build = stop => {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };

  return build();
};

const data = [
  [3, 9, 20, 15, 7],
  [9, 3, 15, 20, 7],
];
// const data = [[-1], [-1];

console.log(JSON.stringify(buildTree(...data)));
