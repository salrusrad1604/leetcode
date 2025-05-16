import { ListNode } from "../../helpers/list-helper.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let store = new Map();
  let list = head;
  let pos = 0;

  while (list && pos < 100) {
    if (store.has(list)) {
      return true;
    }
    store.set(list, pos);
    list = list.next;
    pos++;
  }
  return false;
};

let list = new ListNode(10, new ListNode(10));

list.next.next = list;

console.log(hasCycle(list));
