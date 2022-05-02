// instanceof 是操作符
// 语法object instanceof constructor   某个实例对象，某个构造函数
// instanceof用于检测构造函数的prototype是否在对象的原型链上
// 1. instanceof 的左侧是object
// 2. instanceof 的右侧是函数，才有prototype
// 3. 迭代查找，左侧对象的原型不等于右侧prototype的时候，沿着对象原型链向上赋值
function instanceof2(obj, fn) {
  const baseType = ['string', 'number', 'undefined', 'symbol', 'boolean'];
  if (baseType.includes(typeof (obj))) {
    return false
  }
  let fnProto = fn.prototype;
  while (true) {
    // 防止遍历到顶，原型链到顶是null
    if (obj === null) { return false }
    if (obj === fnProto) {
      return true
    } else {
      // obj = obj.__proto__;
      obj = Object.getPrototypeOf(obj)
    }
  }
}


let arr = [];
console.log(instanceof2(arr, Array));

function C() { }
var o = new C();
o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype
C.prototype = {};
var o2 = new C();


function instanceof3(obj, fn) {
  const baseType = ['number', 'string']
}