// 1. 普通递归挑战
let arr = [1, [2, [3, 4, 5]]]

function flatten(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(flatten(arr));

// 2. reduce实现
function flatten(arr) {
  let res = arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flatten(cur))
    } else {
      return pre.concat(cur)
    }
  }, [])
  return res
}
// console.log(flatten(arr));

// 3. 扩展运算符实现  展开一次(...arr)
function flatten(arr) {

}