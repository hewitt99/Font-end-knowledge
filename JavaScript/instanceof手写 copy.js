// 性质：instanceof是操作符
// 语法：object instanceof constructor
// 原理：通过原型链，查找object的原型在不在constructor上


function instanceof2(obj, fn) {
  const baseType = ['number', 'string', 'undefined', 'boolean', 'symbol']
  if (baseType.includes(baseType)) {
    return false
  }
  while (true) {
    if (obj === null) { return false }
    if (fn === Object.getPrototypeOf(obj)) {
      return true
    } else {
      obj = Object.getPrototypeOf(obj)
    }
  }
}

let x = new Object
let y = Object.create(x)
console.log(instanceof2(y, x.prototype));