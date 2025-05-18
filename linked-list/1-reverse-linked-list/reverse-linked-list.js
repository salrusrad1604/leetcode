import { ListNode, arrToListNode } from '../../helpers/list-helper.js';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head, par = null) {
  if (!head) {
    return head;
  }

  if (!head.next) {
    head.next = par;
    return head;
  }
  const next = head.next;

  head.next = par;

  return reverseList(next, head);
};

// Лучшее решение
// var reverseList = function (head) {
//   if (!head) {
//     return head;
//   }

//   if (head && !head.next) {
//     return head;
//   }

//   let endNode = null;

//   function rc(node) {
//     if (node.next == null) {
//       endNode = node;
//       return node;
//     }

//     let rvNode = rc(node.next);
//     rvNode.next = node;
//     return node;
//   }

//   let rvNode = rc(head.next);
//   rvNode.next = head;
//   head.next = null;
//   return endNode;
// };

const data = arrToListNode([1, 2, 3, 4, 5]);
// const data = arrToListNode([1,2]);
// const data = arrToListNode([]);

console.log(JSON.stringify(reverseList(data)));
