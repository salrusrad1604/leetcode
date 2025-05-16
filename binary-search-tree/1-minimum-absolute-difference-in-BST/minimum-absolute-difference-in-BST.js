import { arrToTreeNode } from "../../helpers/tree-helper.js";

var getMinimumDifference = function (root) {
  const min = Math.min(root.left ? root.val - root.left.val : Infinity, root.right ? root.right.val - root.val : Infinity);

  return Math.min(helper(root.left, -Infinity, root.val, min), helper(root.right, root.val, Infinity, min));
};

const helper = (root, left, rigth, min) => {
  if (!root) return min;

  const newMin = Math.min(root.val - left, rigth - root.val);
  const m = Math.min(min, newMin);

  if (!root.left && !root.right) {
    return m;
  }

  if (!root.left) {
    Math.min(helper(root.left, left, root.val, m), m);
  }

  if (!root.right) {
    Math.min(m, helper(root.right, root.val, rigth, m));
  }

  return Math.min(helper(root.left, left, root.val, m), helper(root.right, root.val, rigth, m));
};

// const data = arrToTreeNode([4, 2, 6, 1, 3]);
// const data = arrToTreeNode([1, 0, 48, null, null, 12, 49]);
const data = arrToTreeNode([1, null, 55555, 30]);

console.log(getMinimumDifference(data));
