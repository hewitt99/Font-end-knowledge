/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let arr = []
  let path = []
  let result = []
  for (let i = 1; i < n + 1; i++) {
    arr.push(i)
  }
  return backTracking(arr, k, 0, path, result)
};

function backTracking(arr, k, startIndex, path, result) {
  if (path.length === k) {
    result.push([...path])
    return
  }
  for (let i = startIndex; i < arr.length; i++) {
    // 从起始位置开始遍历
    path.push(arr[i]);
    backTracking(arr, k, i + 1, path, result);
    path.pop();
  }
  return result;
}

combine(4, 2)