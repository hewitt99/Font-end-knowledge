// 继承
function SuperType() {
  this.colors = ['red', 'green']
}
function SubType() { }
// 继承: 传递参数问题和共享问题, 导致原型链基本不会单独使用
SubType.prototype = new SuperType()
// var instance = new SubType()
// var instance2 = new SubType()
// instance.colors.push('yellow')
// console.log(instance2.colors);