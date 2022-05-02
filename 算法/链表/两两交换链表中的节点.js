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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var swapPairs = function (head) {
  // 1/0节点都返回
  if (!head || !head.next) return head
  let pre = head, cur = head.next
  let result = cur

  while (cur) {
    let tempNode = cur.next
    pre.next = tempNode
    cur.next = pre
    // 后移
    pre = tempNode
    if (!pre) {
      break
    } else {
      cur = pre.next
    }
  }
  return result
};


let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4

console.log(swapPairs(node1));
