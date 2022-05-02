var data = [];

for (var i = 0; i < 3; i++) {
  // (function (x) {
  //   data[x] = function () {
  //     console.log(x);
  //   }
  // })(i)
  fn(i)
  // data[i] = function () {
  //   console.log(i);
  // };
}

function fn(x) {
  data[x] = function () {
    console.log(x);
  }
}

data[0]();
data[1]();
data[2]();
// 执行上下文，作用域/作用域链


function countPlus() {
  var count = 0
  return function (count) {
    console.log(count++);
  }
}
countPlus()()
// console.log(count);