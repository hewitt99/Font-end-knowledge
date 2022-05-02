// 1. this的默认绑定
// function a() {
//   function b() {
//     console.log(this);
//     function c() {
//       'use strict'
//       console.log(this);
//     }
//     c()// undefined
//   }
//   b()// window
// }
// a()


// 2. this的隐式绑定
// var Person = {
//   name: 'human',
//   sayName: function () {
//     console.log(this.name);
//   },
//   student: {
//     // name: 'lwh',
//     sayName: function () {
//       console.log(this.name);
//     }
//   }
// }
// Person.student.sayName()

// 3. 硬绑定
// 4. 构造函数绑定



// 练习题：
var name = '小红';
function a() {
  var name = '小白';
  console.log(this.name);
}

function d(i) {
  return i();
}
var b = {
  name: '小黄',
  detail: function () {
    console.log(this.name);
  },
  bibi: function () {
    return function () {
      console.log(this.name);
    }
  }
}

var c = b.detail;
b.a = a;
var e = b.bibi();
a();
c();
b.a();
d(b.detail);
e();