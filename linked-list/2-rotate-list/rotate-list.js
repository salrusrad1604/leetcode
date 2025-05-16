import { ListNode, arrToListNode } from "../../helpers/list-helper.js";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }

  let init = new ListNode(null, head);
  let curr = init.next;
  let i = 1;
  const obj = {};

  while (curr) {
    obj[i] = curr;
    curr = curr.next;
    if (curr) {
      i++;
    }
  }

  let rot = k % i;
  if (rot) {
    obj[i - rot].next = null;
    obj[i]["next"] = init.next;
    init.next = obj[i - rot + 1];
  }
  return init.next;
};

// const data = [arrToListNode([1, 2, 3, 4, 5]), 2];
// const data = [arrToListNode([0, 1, 2]), 4];
const data = [arrToListNode([1, 2]), 2];

console.log(JSON.stringify(rotateRight(...data)));
