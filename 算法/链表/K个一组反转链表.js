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
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var reverseKGroup = function (head, k) {
  // 每k个为一组，记录组的前节点和后节点
  // 组内进行倒序
  let ans = head
  let path = []
  let count = 0
  let pre = null// 记录每组的前一个
  // let cur = null// 记录每组的后一个,貌似用不着
  while (head || path.length === k) {
    if (path.length === k) {
      getReverse(path)
      if (count === 0) {
        ans = path[path.length - 1]
      }
      if (pre && count !== 0) {
        pre.next = path[path.length - 1]
      }
      pre = path[0]
      path = []
      count++
    }
    if (head) {
      path.push(head)
      head = head.next
    }
  }
  return ans
};



function getReverse(path) {
  let len = path.length
  let cur = path[len - 1].next
  for (let i = len - 1; i > -1; i--) {
    if (i === 0) {
      path[i].next = cur
      continue
    }
    path[i].next = path[i - 1]
  }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
// let node3 = new ListNode(3)
// let node4 = new ListNode(4)
// let node5 = new ListNode(5)
node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5

node = reverseKGroup(node1, 2)
while (node) {
  console.log(node.val);
  node = node.next
}