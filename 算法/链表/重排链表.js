/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 找到中间节点，分成两组
  // 第二组反转
  // 两组合并
  const dummyNode = new ListNode(0, head)
  let fast = dummyNode
  let slow = dummyNode
  let newHead = null

  while (fast) {
    slow = slow.next
    if (!fast.next) break
    fast = fast.next.next
  }// slow在第二段开头， fast在尾巴/null

  newHead = getReverse(slow)//分割，反转
  // 第一段尾巴还指向第二段开头

  // 合并
  return getMerged(head, newHead)
};


function getReverse(head) {
  if (!head.next) return head
  // 倒数第二，下一层返回倒数第一
  let lastNode = getReverse(head.next)
  head.next.next = head
  head.next = null
  return lastNode
}

function getMerged(old, now) {
  // 第二段 >= 第一段
  const head = old
  while (now) {
    let temp1 = old.next
    let temp2 = now ? now.next : null

    old.next = now
    if (now) {
      now.next = temp1
    }
    old = temp1
    now = temp2
  }
  return head
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(reorderList(node1));