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
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }

  const ans = []
  const nodeQueue = [root]

  let flag = true

  while (nodeQueue.length) {
    let list = []
    let len = nodeQueue.length
    for (let i = 0; i < len; i++) {
      let node = nodeQueue.shift()
      if (flag) {
        list.push(node.val)
      } else {
        list.unshift(node.val)
      }
      node.left && nodeQueue.push(node.left)
      node.right && nodeQueue.push(node.right)
    }
    ans.push(list)
    flag = !flag
  }
  return ans
};


let node1 = new TreeNode(0)
let node2 = new TreeNode(2)
let node3 = new TreeNode(4)
node1.left = node2
node1.right = node3
let node4 = new TreeNode(1)
let node5 = new TreeNode(3)
let node6 = new TreeNode(-1)
node2.left = node4
node3.left = node5
node3.right = node6
let node7 = new TreeNode(5)
let node8 = new TreeNode(1)
node4.left = node7
node4.right = node8
let node9 = new TreeNode(6)
let node10 = new TreeNode(8)
node5.right = node9
node6.right = node10

console.log(zigzagLevelOrder(node1));