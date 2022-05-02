// 迭代
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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var preorderTraversal = function (root) {
  // 迭代，利用栈来模仿递归
  let ans = [], stk = [];
  if (root) {
    stk.push(root)
  } else {
    return []
  }
  let temp = null;
  while (stk.length !== 0) {
    temp = stk.pop()
    ans.push(temp.val)
    if (temp.right) {
      stk.push(temp.right)
    }
    if (temp.left) {
      stk.push(temp.left)
    }
  }
  return ans
};

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
node1.right = node2
node2.left = node3

console.log(preorderTraversal(node1));