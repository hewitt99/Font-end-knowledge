var a = 1;
var b = 1;
function m() {
  console.log(a);// undefined
  console.log(b);// 1

  function n() {
    a = 5;
  }
  var a = 2;
  n();
  console.log(a);// 5
  console.log(b);// 1
}
m();

function sayHi() {
  try {
    console.log(name);
    console.log(age);
  } catch (e) {
    console.log(e);
  }
  var name = 'lwh'
  let age = 18
}
sayHi()

