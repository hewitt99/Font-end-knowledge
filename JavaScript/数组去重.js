// 数组去重
let arr = [1, 2, 2, 1, 3, 4, 5, 6, 4, 2];

// 1. 通过splice删除
function Delrepeat(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;// 改变了原来的参数arr
}
// console.log(Delrepeat(arr));

// 2. set+拓展运算符
function Delrepeat2(arr) {
  // 方法 1：return [...new Set(arr)]
  // 方法 2
  let ans = [];
  for (let i of new Set(arr)) {
    ans.push(i)
  }
  return ans
}
console.log(Delrepeat2(arr));

// indexOf
function Delrepeat3(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (ans.indexOf(arr[i]) === -1) {
      ans.push(arr[i])
    }
  }
  return ans
}
console.log(Delrepeat3(arr));