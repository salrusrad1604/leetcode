import { ListNode, arrToListNode } from '../../helpers/list-helper.js';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteMiddle = function (head) {
  let ptr1 = head;
  let ptr2 = head;
  let ptr3 = null;

  while (ptr1 && ptr1.next) {
    ptr3 = ptr2;
    ptr2 = ptr2.next;
    ptr1 = ptr1.next.next;
  }

  if (ptr3) {
    ptr3.next = ptr2.next;
  } else {
    head = ptr2.next;
  }
  return head;
};

// const data = arrToListNode([1, 3, 4, 7, 1, 2, 6]);
// const data = arrToListNode([1, 2, 3, 4]);
// const data = arrToListNode([2, 1]);
const data = arrToListNode([1]);

console.log(JSON.stringify(deleteMiddle(data)));
