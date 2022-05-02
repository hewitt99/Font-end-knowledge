/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 数字1-9
var combinationSum3 = function (k, n) {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let path = [], result = [], stratIndex = 0
  backTracking(k, n, path, result, list, stratIndex)
  return result
};


function backTracking(k, n, path, result, list, stratIndex) {
  if (n === 0 && path.length === k) {
    return result.push(Array.from(path))
  }
  if (path.length == k) {
    return
  }

  for (let i = stratIndex; i < list.length; i++) {
    if (n > 0) {
      if (n < list[i]) {
        return
      }// 剪枝
      path.push(list[i])
      n -= list[i]
      backTracking(k, n, path, result, list, i + 1)
      n += list[i]
      path.pop()
    }
  }
}

console.log(combinationSum3(4, 1));