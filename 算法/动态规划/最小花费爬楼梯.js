/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // dp[i] 爬到i最小花费
  // dp[i] = min(dp[i-1]+cost[i-1] , dp[i-2]+cost[i-2])
  // 初始：dp[0]=0  dp[1]=0
  let dp = []
  dp[0] = 0, dp[1] = 0
  if (cost.length == 1) {
    return cost[0]
  } else if (cost.length == 2) {
    return Math.min(cost[0], cost[1])
  }
  let i = 2
  while (i <= cost.length) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    i++
  }
  console.log(dp);
  return dp[cost.length]
};
console.log(minCostClimbingStairs([10, 15, 20]));