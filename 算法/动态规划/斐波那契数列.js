/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  /**
  dp[j] = dp[j-1] + dp[j-2]
  dp[j] 次数
  dp[0]=?
  遍历顺序
  举例推导dp数组
   */
  let dp = []
  dp[0] = 0, dp[1] = 1
  for (let i = 2; i <= n; i++) {
    if (n < 2) { return n }
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp
};

console.log(fib3(5));
// 递归实现
function fib2(n) {
  if (n < 2) {
    if (n === 1) {
      return 1
    }
    if (n === 0) {
      return 0
    }
  } else {
    return fib2(n - 1) + fib2(n - 2)
  }
}

function fib3(n) {
  if (n < 2) return n
  let dp = [0, 1, 0]
  for (let i = 0; i < n - 1; i++) {
    dp[2] = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = dp[2]
  }
  return dp[2]
}
