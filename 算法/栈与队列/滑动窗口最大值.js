/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let helperQueue = new Myqueue();
  let i = 0, j = 0;
  let res = [];
  while (j < k) {
    helperQueue.enqueue(nums[j++])
  }
  res.push(helperQueue.ans())
  while (j < nums.length) {
    helperQueue.enqueue(nums[j])
    helperQueue.dequeue(nums[i])
    res.push(helperQueue.ans())
    i++, j++
  }
  return res
};


// 维护单调队列
function Myqueue() {
  this.queue = []
  // 出队
  Myqueue.prototype.dequeue = function (value) {
    if (value === this.queue[0]) {
      this.queue.shift()
    }
  }
  // 入队
  Myqueue.prototype.enqueue = function (value) {
    // 超长度就要判断
    let back = this.queue[this.queue.length - 1]
    // 如果queue满了，且value更大
    while (back !== undefined && back < value) {
      this.queue.pop()
      back = this.queue[this.queue.length - 1]
    }
    this.queue.push(value)
  }
  // 返回第一个，也就是最大
  Myqueue.prototype.ans = function () {
    return this.queue[0]
  }
}