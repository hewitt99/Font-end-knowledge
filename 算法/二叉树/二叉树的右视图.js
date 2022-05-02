
// [1, 2, 3, null, 5, null, 4]
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
node1.left = node2
node2.right = node5
node1.right = node3
node3.right = node4
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
var rightSideView = function (root) {
  let res = [root.val];
  let queue = [root];
  return track(queue, res)
};

function track(queue, res) {
  if (queue.length === 0) {
    return res
  }
  let ans = [];
  // 遍历完后，就是把下一层全部存入了ans
  for (let item of queue) {
    if (item.left) {
      ans.push(item.left)
    }
    if (item.right) {
      ans.push(item.right)
    }
  }
  // 把当前层的最后一个存入res内
  if (ans.length !== 0) {
    res.push(ans[ans.length - 1].val)
  }
  track(ans, res)
  return res
}


console.log(rightSideView(node1));