/**
 * new的过程
 * 1. 创建新的空对象
 * 2. 把构造函数的原型对象赋给新对象的[[prototype]]隐藏的__proto__
 * 3. 把构造函数的this指向新对象
 * 4. 执行构造函数内部代码，给新对象赋值
 * 5. 如果构造函数返回非空对象，就返回该对象；否则返回新对象
 * (非空对象： {} )
 */
// number, string. boolean, symbol, object, array, 
let Person = function (name) {
  this.name = name;
  return null
}
// let lwh = new Person('林炜昊')
// console.log(lwh);
// 简易版
var new2 = function (fn, arguments) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, arguments);
  return obj = (Object.prototype.toString.call(fn()) === 'object Object') ? fn() : obj
}

let lwh = new2(Person, ['林炜昊']);
console.log(lwh);
console.log('Person()RETRUN: ', Person());


