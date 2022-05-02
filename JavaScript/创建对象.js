// 1. 概述：Object构建函数或对象字面量可以方便的创建对象
var o = {}
o = new Object()
// 2. 工厂模式
/**
 * 解决了创建了多个类似对象的问题
 * 没有解决对象标识的问题（新创建的对象是什么类型
 */
let createPerson = function (name, age) {
  let o = new Object()
  // 和 let o = new Object  括号有参数，按照不同的构造函数去调用；否则是默认
  o.name = name
  o.age = age
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}
var person1 = createPerson('lwh', 18)
var person2 = createPerson('wyh', 19)
person1.sayName()
person2.sayName()


// 3. 构造函数模式
/**
 * 用于创建特定类型对象
 * 和工厂模式的区别: 
 * 1. 没有显式地创建对象
 * 2. 属性和方法直接赋值给了this
 * 3. 没有return
 * 问题：通过构造函数模式，构造函数会在所有的新对象上创建每一个实例，包括方法(这是没有必要的)
 * 解决方法：把函数拿出来，放在全局作用域下，又带来了污染全局作用域的问题--原型模式来解决
 */
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  }
  // this.sayName = new Function('console.log(this.name)')逻辑等价
}


// 4. 原型模式
/**
 * 原型要理解的点
 * 1. 函数都有prototype原型对象,原型对象的constructor指回构造函数; 
 * 2. 实例是__proto__,指向原型对象
 * 3. Person.Prototype.isPrototypeOf(instance)
 * 4. Object.getPrototypeOf(instance)--> 获得对应构造函数的原型对象prototype
 * 5. 实例的属性会遮蔽原型上的同名属性
 * 6. instance.hasOwnProperty()确定某个属性在实例还是原型上
 * 7. (propertyName in instance), 在实例和在原型对象上都会返回ture
 * 8. for-in会遍历实例对象的每一个实例属性和原型属性，即使原型中不可枚举的属性的实例属性也会返回
 * 9. Object.keys()返回 Object.getOwnPropertyNames()
 * 10. 属性枚举顺序:
 * 10.1 for-in和Object.keys()是无序的,取决于浏览器
 * 10.2 Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Object.assign()有序
 * 11. 对象的迭代Object.values()和Object.entried()浅复制，忽略符号属性
 */

/**
 * 问题：属性确实没有到全局作用域下，但是弱化了向构造函数传递参数的能力
 * 更重要的是，所有实例默认取得相同的值，且共享
 * 共享：对非引用数据可以遮蔽，对于引用类型数据修改，会导致其他实例也会被修改
 */
var Person = function () { }
Person.prototype.name = 'lwh'
Person.prototype.age = 18
Person.prototype.sayName = function () {
  console.log(this.name);
}
var person1 = new Person()
var person2 = new Person()
person2.name = 'wyh'
person2.age = 20
person2.sayName()
/**
 * 一个个设置prototype会嫌麻烦
 * 利用
 * Person.prototype = {
 *  constructor: Person, // 为了指向Person
 *  name: 'lwh',
 *  sayName(){
 *    console.log(this.name) 
 *  }
 * }
 * 重写了Person, constructor指向Object
 * 为了让指向Person添加constructor: Person
 * 问题：这样创建的constructor会默认可以枚举，原生的不可以枚举
 * 使用Object.defineProperty(Person.prototype, 'constructor'){
 *    enumerable: false,
 *    value: Person
 *  }// ps: 回忆数据属性和访问器属性
 * 
 */
