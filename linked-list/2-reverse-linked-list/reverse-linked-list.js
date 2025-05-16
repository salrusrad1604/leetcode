import { ListNode, arrToListNode } from "../../helpers/list-helper.js";
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < left - 1; ++i) {
    prev = prev.next;
  }

  let current = prev.next;

  for (let i = 0; i < right - left; ++i) {
    const nextNode = current.next;
    current.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
  }

  return dummy.next;
};

const arg = [arrToListNode([1, 2, 3, 4, 5]), 1, 4];
// const arg = [arrToListNode([5]), 1, 1]
// const arg = [arrToListNode([3,5]), 1, 2]

console.log(JSON.stringify(reverseBetween(...arg)));
