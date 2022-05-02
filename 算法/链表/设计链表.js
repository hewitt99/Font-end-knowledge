var MyLinkedList = function () {
  this.len = 0;
  this.head = null;
  this.tail = null;
};

var Node = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let p = this.head
  if (index >= 0 && index < this.len) {// 没有越界
    for (let i = 0; i < index; i++) {
      p = p.next
    }
    return p.val
  } else {
    return -1
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val, this.head)
  this.head = newNode
  if (this.len == 0) {
    this.tail = newNode
  }
  this.len++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val)
  // this.tail.next = newNode
  if (this.len == 0) {//没有尾巴
    this.addAtHead(val)
  } else {
    this.tail.next = newNode
    this.tail = newNode
    this.len++
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) {
    this.addAtHead(val)
  } else if (index > this.len) {
    return -1
  } else if (index == this.len) {
    this.addAtTail(val)
  } else {
    let p = this.head
    // 在下标为index-1的地方
    let newNode = new Node(val)
    for (let i = 0; i < index - 1; i++) {//获得前一个
      p = p.next
    }
    temp = p.next
    p.next = newNode
    newNode.next = temp
    this.len++
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    this.head = this.head.next
    this.len--
  } else if (index > 0 && index < this.len) {
    let p = this.head
    for (let i = 0; i < index - 1; i++) {
      p = p.next
    }
    // p.next = p.next.next出错
    if (this.len === 1) {
      this.head = null
      this.tail = null
      this.len--
    } else {
      if (index == this.len - 1) {
        this.tail = p // 处理尾节点
      }
      p.next = p.next.next
    }
    this.len--
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var obj = new MyLinkedList()
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1, 2)
obj.get(1)//2
obj.deleteAtIndex(0)
obj.get(0)//2


let arr = [1, 2]
console.log(arr.reverse());