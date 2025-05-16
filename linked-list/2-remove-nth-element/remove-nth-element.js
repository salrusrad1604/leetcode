import { arrToListNode, ListNode } from "../../helpers/list-helper.js";
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) {
    return null;
  }

  let init = new ListNode(0, head);
  let curr = init;
  const obj = {};

  let i = 0;

  while (curr) {
    obj[i] = curr;
    curr = curr.next;
    if (curr) {
      i++;
    }
  }

  const left = obj[i - n];

  if (n > 1) {
    const right = obj[i - n + 2];
    left.next = right;
  } else {
    left.next = null;
  }

  return init.next;
};

// const data = [arrToListNode([1, 2, 3, 4, 5]), 2];
// const data = [arrToListNode([1]), 1];
// const data = [arrToListNode([1, 2]), 1];
const data = [arrToListNode([1, 2]), 2];

console.log(JSON.stringify(removeNthFromEnd(...data)));
