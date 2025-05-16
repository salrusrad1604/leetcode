import { TreeNode, arrToTreeNode } from "../../helpers/tree-helper.js";
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.array = [];
  this.index = 0;

  const getValues = (tree, arr) => {
    if (root === null) return;
    if (tree.left) getValues(tree.left, arr);
    arr.push(tree.val);
    if (tree.right) getValues(tree.right, arr);
  };

  getValues(root, this.array);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.array[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.array.length - 1;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const data = arrToTreeNode([7, 3, 15, null, null, 9, 20]);

var obj = new BSTIterator(data);
console.log(obj.next());
console.log(obj.hasNext());
