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


// 1. 盗用构造函数
/**
 * 1. 可以传递参数
 * 2. 解决了引用值共享问题
 * 3. 和构造函数模式一样，方法的强制复制
 * 4. 子类不能访问父类原型的方法
 */
function SuperType(id) {
  this.colors = ['red', 'green']
  this.id = id
  // 这里只有把方法写在父类里面，在创建新实例的时候，所有新实例都会创建这个方法
  // 写在原型上面，子类没用原型链又用不到SuperType.prototype()
  this.sayName = function () {
    console.log(this.id);
  }
}
function SubType(id, age) {
  SuperType.call(this, id)
  this.age = age
}
// var instance1 = new SubType('002', 17)
// var instance2 = new SubType('003', 10)
// instance2.sayName()


// 2. 组合继承
/**
 * 原型链 + 盗用构造函数
 */
function SuperType(id) {
  this.colors = ['red', 'green']
  this.id = id
}
SuperType.prototype.sayId = function () {
  console.log(this.id);
}
function SubType(id, age) {
  // 继承属性
  SuperType.call(this, id)
  this.age = age
}
// 继承方法
SubType.prototype = new SuperType()
// var instance1 = new SubType('001');
// var instance2 = new SubType('002');
// instance1.colors.push('blue')
// console.log(instance2.colors); // 能够顺利独立使用引用值
// instance2.sayId(); // 顺利通过原型链调用方法


// 3. 原型式继承
/**
 * 以前：
 * function object(o){
 *  function F(){}  // 创建一个临时的构造对象
 *  F.prototype = o // 将传入的对象赋值给临时构造对象的原型
 *  return new F() // 返回临时构造对象的实例
 * }  // 本质上是对object执行了一次浅复制
 * 适用于不需要单独创建构造函数，但仍然需要在对象间共享信息的场合
 * 引用值始终会在各个实例里面共享
 * ES5用Object.create()将原型式继承规范化,如果只有一个参数,就和上述一样的效果
 */
var person = {
  name: 'god',
  friends: ['Bob', 'Hewitt']
}
// var instance1 = Object.create(person)
// var instance2 = Object.create(person, {
//   name: {
//     value: 'Greg'
//   }
// }) // 第二个参数和Object.defineProperties(obj, { name:{value:'1',written:true} } )一样
// instance1.name = '01'// 遮蔽原型
// instance2.name = '02'
// instance1.friends.push('David')// 实例间共享
// console.log(instance2.name);


// 4. 寄生式继承
/**
 * 要能记住每种方法是怎么写的，要记住每种方法的优劣
 * 寄生式继承类似于寄生构造函数和工厂模式：
 * 创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象
 * 
 * 适合于不在乎对象类型的情况，问题和工厂模式类似，都要创建相同的方法
 */
function object(obj) {
  function Fn() { }
  Fn.prototype = obj
  return new Fn()
}
function createAnother(original) {
  let clone = object(original) // 返回新的对象赋值给clone
  clone.sayHi = function () { // 增强clone
    console.log('sayHi');
  }
  return clone // 然后返回
}
// 5. 寄生式组合继承
/**
 * 相当于修改组合模式
 * 组合模式的问题
 * function SubType(name, age){
 *   SuperType.call(this, name) // 构造属性
 *   this.age = age
 * }
 * SubType.prototype = new SuperType()
 * 如上，调用了两次父类构造函数存在效率问题
 * 使用寄生组合模式为的是避免多次调用父类元素
 * 基本思路：不通过调用父类构造函数给子类原型赋值，而是取得父类原型的副本
 * 寄生式继承来继承父类原型，将返回的新对象赋值给子类原型
 * 
 * 避免了SubType.prototype上不用到的多余的属性，原型链保持不变
 */

function inheritPrototype(SubType, SuperType) {
  let prototype = object(SuperType.prototype); // 创建对象
  /**
   * function Fn() {} // 
   * Fn.prototype = SuperType.prototype
   * return new Fn()
   */
  prototype.constructor = SubType; // 这是解决重写带来的constructor丢失问题
  SubType.prototype = prototype; // 赋值对象 这里是重写
}

var instance = new SubType('99', 18)
console.log(instance);