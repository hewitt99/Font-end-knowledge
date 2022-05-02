/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) {
    return [[1]]
  }
  // 到如果要写出正确的二分法一定要坚持循环不变量原则
  // 这道题也是
  let arr = new Array(n).fill().map(() => Array(n));
  let k = 1;
  let top = 0, bottom = n - 1, left = 0, right = n - 1;
  while (k <= n * n) {
    // 上
    for (let i = left; i < right; i++) {
      arr[top][i] = k;
      k++;
    }
    // 右
    for (let i = top; i < bottom; i++) {
      arr[i][right] = k;
      k++
    }
    for (let i = right; i > 0; i--) {
      if (!arr[bottom][i]) {
        arr[bottom][i] = k;
        k++;
      }
    }
    for (let i = bottom; i > 0; i--) {
      if (!arr[i][left]) {
        arr[i][left] = k;
        k++;
      }
    }
    top++;
    left++;
    bottom--;
    right--;
  }
  return arr
};
// console.log(generateMatrix(3));
// console.log(generateMatrix(4));
console.log(generateMatrix(3));

