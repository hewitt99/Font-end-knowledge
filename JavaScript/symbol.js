// Symbol()
/**
 * 总结：
 * 1. [基本类型来谈]是一个基本类型/原始值，不能new
 * 2. [基本类型来谈]是唯一的,比如(Symbol() === Symbol()) false
 * 3. [查找]用Object.getOwnPropertyNames(), Object.keys(), for...in查找不了Symbol属性
 * 4. [查找]用Object.getOwnPropertySymbols()
 * 5. [Symbol.for]用来创建共享Symbol，如果已经是创建了，就返回共享Symbol
 * 6. [Symbol.for]用Symbol.keyFor()查找已经登记的共享Symbol键，如果没有就返回undefined
 * 7. [Symbol()]接受一个描述性的参数，作用是方便调试和阅读，在打印Symbol时候会作为description显示出来
 */





// 不算构造函数，不能new Symbol(), symbol是原始值
// Symbol.for()共享

let Products = {
  food: ['猕猴桃', '苹果', '香蕉'],
  tool: ['铲子', '胶水']
}

const food1 = Symbol.for('瓜')
Products[food1] = '西瓜'
const tool1 = Symbol('榔头')
Products[tool1] = '榔头'

const food2 = Symbol.for('瓜')
Products[food2] = '哈密瓜'
// console.log(Products);

// console.log(Object.getOwnPropertySymbols(Products));
// console.log(food1, Symbol.keyFor(food1));
console.log(Symbol.keyFor(tool1));

// console.log(Symbol() === Symbol());
let fn = function () { }
console.log('--:', fn instanceof Object)
