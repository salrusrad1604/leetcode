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
 * @return {number}
 */

var pairSum = function (head) {
  if (head == null || head.next == null) return head;

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = reverse(slow);

  let max = 0;
  while (second != null) {
    let current = head.val + second.val;
    max = Math.max(max, current);
    head = head.next;
    second = second.next;
  }
  return max;
};

let reverse = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// const data = arrToListNode([5, 54, 2, 1]);
// const data = arrToListNode([4, 2, 2, 3]);
const data = arrToListNode([1, 100000]);

console.log(pairSum(data));
