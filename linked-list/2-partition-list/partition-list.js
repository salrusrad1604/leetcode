import { ListNode, arrToListNode } from "../../helpers/list-helper.js";

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const initleft = new ListNode(0);
  const initright = new ListNode(0);

  let left = initleft;
  let right = initright;
  let curr = head;

  while (curr) {
    if (curr.val < x) {
      left.next = curr;
      left = left.next;
    } else {
      right.next = curr;
      right = right.next;
    }

    curr = curr.next;
  }

  right.next = null;
  left.next = initright.next;
  return initleft.next;
};

const data = [arrToListNode([1, 4, 3, 2, 5, 2]), 3];
// const data = [arrToListNode([2, 1]), 2];

console.log(JSON.stringify(partition(...data)));
