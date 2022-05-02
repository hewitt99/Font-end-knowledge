// 设计一个简单的任务队列(先进先出)，要求分别在 1,3,4 秒后打印出 "1", "2", "3"


function test(queue, stop) {
  let count = 0;
  let timeout = setInterval(function () {
    if (count != stop - 1) console.log(queue.shift());
    count++;
    if (!queue.length) clearInterval(timeout);
  }, 1000);
}
// test([1, 2, 3], 2);



// 8. 代码实现：设计一个任务队列，有on，trigger和off方法
// 分别完成注册事件触发回调，触发当前事件全部回调，和取消当前事件的任务队列的功能
// （其实不难，主要是我写的磨磨蹭蹭的……最后想通了就写的很快了，也很感谢面试官的耐心等待和思路提醒！）
function taskQueue(queue) {
  // 也接收任务队列
  this.queue = queue === undefined ? [] : queue
  this.max = 10

  taskQueue.prototype.on = function (fn) {
    this.fn = fn
    if (this.queue.length < this.max) {
      this.queue.push(fn)
      return '已加入'
    } else {
      return '超出任务队列'
    }
  }

  taskQueue.prototype.trigger = function () {
    if (this.queue.length === 0) return '无事件'
    for (let i = 0; i < this.queue.length; i++) {
      Promise.resolve().then(
        this.queue[i]()
      )// 加入到微任务队列
    }
    return '触发所有任务'
  }

  taskQueue.prototype.off = function () {
    this.queue = []
    return '已清除'
  }
}

function log(x) {
  return function () {
    console.log(x);
  }
}
let queue = new taskQueue()
console.log(queue.on(log(7)));
console.log(queue.on(log(8)));
// queue.off()
console.log(queue.trigger());


