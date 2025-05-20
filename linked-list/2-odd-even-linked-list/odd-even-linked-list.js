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

var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let oddList = head;
  let evenList = head.next;
  let evenListHead = head.next;

  while (evenList && evenList.next) {
    oddList.next = oddList.next.next;
    evenList.next = evenList.next.next;
    oddList = oddList.next;
    evenList = evenList.next;
  }
  oddList.next = evenListHead;

  return head;
};

const data = arrToListNode([1, 2, 3, 4, 5]);
// const data = arrToListNode([2, 1, 3, 5, 6, 4, 7]);

console.log(JSON.stringify(oddEvenList(data)));
