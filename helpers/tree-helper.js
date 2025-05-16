export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export function arrToTreeNode(arr) {
  if (!arr || !arr.length) {
    return null;
  }

  const values = arr[Symbol.iterator]();
  const root = new TreeNode(values.next().value);
  const queue = new Set().add(root);

  for (const node of queue) {
    for (const side of ['left', 'right']) {
      const value = values.next().value;
      if (value != null) {
        node[side] = new TreeNode(value);
        queue.add(node[side]);
      }
    }
  }
  return root;
}
