export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function arrToListNode(arr) {
  if (!arr.length) {
    return null;
  }
  let selectNode = new ListNode();
  let result = selectNode;

  arr.forEach((el, i) => {
    selectNode.val = el;
    if (i != arr.length - 1) {
      selectNode.next = new ListNode();
      selectNode = selectNode.next;
    }
  });
  return result;
}

export function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

export function arrToNode(arr) {
  if (!arr.length) {
    return null;
  }
  let selectNode = new _Node();
  let result = selectNode;

  arr.forEach(([val, random], i) => {
    selectNode.val = val;
    selectNode.random = random;
    if (i != arr.length - 1) {
      selectNode.next = new _Node();
      selectNode = selectNode.next;
    }
  });
  return result;
}
