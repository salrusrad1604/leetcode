import { _Node, arrToNode } from "../../helpers/list-helper.js";

var copyRandomList = function (head) {
  let store = new Map();
  let curr = head;

  while (curr) {
    store.set(curr, new _Node(curr.val));
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const copy = store.get(curr);
    copy.next = store.get(curr.next) || null;
    copy.random = store.get(curr.random) || null;
    curr = curr.next;
  }
  return store.get(head);
};

const list = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
// const list = [[1,1],[2,1]];
// const list = [[3,null],[3,0],[3,null]];

console.log(JSON.stringify(copyRandomList(arrToNode(list))));
