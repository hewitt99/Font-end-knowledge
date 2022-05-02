/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动规五步：
  // 1.dp[j] 代表j之前结尾最长上升子序列长度
  // 2.状态转移if(nums[i] > nums[j]){ dp[i] = max(dp[i], dp[j]+1)}(取dp[j]+最大值)
  // 3.dp[i]初始化，最小为1
  // 确定遍历顺序通过ij，i在外层，j在内层
  let dp = Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[nums.length - 1]
};
alert(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))