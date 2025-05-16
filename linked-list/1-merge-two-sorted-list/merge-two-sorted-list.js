import { ListNode, arrToListNode } from "../../helpers/list-helper.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }

  let curr = new ListNode();
  let result = curr;

  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val < list2.val) {
        curr.val = list1.val;
        list1 = list1.next;
      } else {
        curr.val = list2.val;
        list2 = list2.next;
      }
    } else if (!list1) {
      curr.val = list2.val;
      list2 = list2.next;
    } else if (!list2) {
      curr.val = list1.val;
      list1 = list1.next;
    }

    if (list1 || list2) {
      curr.next = new ListNode();
      curr = curr.next;
    }
  }

  return result;
};

// let lists = [arrToListNode([1, 2, 4]), arrToListNode([1, 3, 4])];
// let lists = [arrToListNode([]), arrToListNode([])];
let lists = [arrToListNode([]), arrToListNode([0])];

console.log(JSON.stringify(mergeTwoLists(...lists)));
