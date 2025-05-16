import { ListNode, arrToListNode } from "../../helpers/list-helper.js";

var addTwoNumbers = function (l1, l2) {
  let add = 0;
  let curr = new ListNode();
  const result = curr;

  while (l1 || l2 || add) {
    let sum = add;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    add = Math.floor(sum / 10);
    curr.val = Math.floor(sum % 10);

    if (l1 || l2 || add) {
      curr.next = new ListNode();
      curr = curr.next;
    }
  }
  return result;
};

// const lists = [arrToListNode([2, 4, 3]), arrToListNode([5, 6, 4])];
// const lists = [arrToListNode([0]), arrToListNode([0])];
const lists = [arrToListNode([9, 9, 9, 9, 9, 9, 9]), arrToListNode([9, 9, 9, 9])];

console.log(JSON.stringify(addTwoNumbers(...lists)));
