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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const res = new ListNode();
  let currRes = res;

  const arr = [];

  while (head) {
    arr.push(head);
    head = head.next;

    if (arr.length === k) {
      while (arr.length) {
        currRes.next = arr.pop();
        currRes = currRes.next;
      }
    }
  }

  for (const node of arr) {
    currRes.next = node;
    currRes = currRes.next;
  }

  currRes.next = null;

  return res.next;
};

const data = [arrToListNode([1, 2, 3, 4, 5]), 2];
// const data = [arrToListNode([1, 2, 3, 4, 5]), 3];

console.log(JSON.stringify(reverseKGroup(...data)));
