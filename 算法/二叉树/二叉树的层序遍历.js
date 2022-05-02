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
var levelOrder = function (root) {
  let queue = null
  let ans = []
  if (root) {
    queue = [root]
    ans.push([root.val])
  } else {
    return []
  }
  while (queue.length !== 0) {
    let tempAns = []
    for (let node of queue) {
      if (node.left) {
        tempAns.push(node.left)
      }
      if (node.right) {
        tempAns.push(node.right)
      }
    }
    if (tempAns.length !== 0) {
      ans.push(tempAns.map((node) => node.val))
    }
    queue = tempAns
  }
  return ans
};