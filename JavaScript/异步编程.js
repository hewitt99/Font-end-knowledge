setTimeout(() => console.log('a'))
Promise.resolve().then(
  () => {
    console.log('b');
  }
).then(
  () => Promise.resolve('c').then(
    (data) => {
      setTimeout(() => console.log('d'))
      console.log('f');
      return data
    }
  )
).then((data) => console.log(data))

/**
 * 好大夫笔试：
 */

function Queue(list) {

  this.list = list === undefined ? [] : list

  Queue.prototype.task = function (delay, fn) {
    this.delay = delay
    this.fn = fn
    let fnc = new Function(
      setTimeout(() => {
        fn()
      }, delay)
    )
    this.list.push(fnc)
    return new Queue(this.list)
  }

  this.start = function () {
    for (let i of this.list) {
      i()
    }
  }
}

let queue = new Queue().task(1000, () => console.log(1)).task(2000, () => console.log(2))
  .task(3000, () => console.log(3)).start()
