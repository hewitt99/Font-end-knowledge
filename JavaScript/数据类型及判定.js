// 1. typeof
console.log(typeof null);// object
console.log(typeof undefined);// undefined
console.log(typeof '1');// string
console.log(typeof 1);// number
console.log(typeof {});// object
console.log(typeof fn);// function
function fn() { }

// 2. Array类型检测
let arr = []
console.log('=====Array=====');
// 根据原型链判断，少用
console.log(arr instanceof Array);
console.log(arr.__proto__.constructor === Array);
// 靠谱的方法
console.log(Object.prototype.toString.call(arr));
// 官方提供简单可行的方法
console.log(Array.isArray(arr));



