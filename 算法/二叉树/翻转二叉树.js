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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let stk = []
  if (!root) {
    return root
  } else {
    stk.push(root)
  }

  while (stk.length !== 0) {
    let tempRoot = stk.pop()
    let tempNode = tempRoot.right
    tempRoot.left = tempRoot.right
    tempRoot.right = tempNode;
    if (tempRoot.right) {
      stk.push(tempRoot.right)
    }
    if (tempRoot.left) {
      stk.push(tempRoot.left)
    }
  }
  return root
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


