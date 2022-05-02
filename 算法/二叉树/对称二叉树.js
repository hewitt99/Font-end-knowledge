/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var isSymmetric = function (root) {
  // 中序遍历
  let cur = root
  let stk = []
  if (!root) {
    return true
  }
  let ans = []
  while (stk.length !== 0 || cur) {
    if (cur) {
      stk.push(cur)
      cur = cur.left
    } else {
      cur = stk.pop()
      ans.push(cur.val)
      cur = cur.right
    }
  }
  if (ans.length % 2 === 0) {
    return false
  } else {
    let l = 0, r = ans.length - 1
    while (ans[l] === ans[r]) {
      l++
      r--
      if (l === r) {
        return true
      }
    }
    return false
  }
};

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(2)
let node6 = new TreeNode(3)
let node7 = new TreeNode(4)
node1.left = node2
node1.right = node5
node2.left = node3
node2.right = node4
node5.left = node7
node5.right = node6

alert(isSymmetric(node1))