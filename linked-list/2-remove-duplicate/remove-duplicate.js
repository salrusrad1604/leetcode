import { ListNode, arrToListNode } from "../../helpers/list-helper.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let init = new ListNode(null, head);

  let curr = init;

  let last = curr;

  while (curr) {
    if (!curr.next || curr.val != curr.next.val) {
      last = curr;
      curr = curr.next;
    } else {
      let val = curr.val;
      let pre = curr;
      while (val === curr.val && pre) {
        if (pre.val != val) {
          val = pre.val;
          last.next = pre;
          curr = last;
          break;
        }
        if (!pre.next) {
          last.next = null;
          curr = last;
          break;
        }
        pre = pre.next;
      }
    }
  }

  return init.next;
};

// const data = [1, 2, 3, 3, 4, 4, 5];
// const data = [1, 1, 1, 2, 3];
const data = [1, 1];

console.log(JSON.stringify(deleteDuplicates(arrToListNode(data))));
