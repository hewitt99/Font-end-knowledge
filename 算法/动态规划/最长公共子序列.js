/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 1. 确定dp数组含义
  // 2. 确定递推公式（状态转移 *****
  // 3. dp初始化
  // 4. 确定遍历顺序
  // 5. 举例推导dp数组

  // dp[i][j]就代表长度i的text1和text2的最长公共子序列
  // 状态转移：
  /*
  if( text1[i-1] = text[j-1]){
    dp[i][j] = dp[i-1][j-1] + 1
  }else{
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
  }
   */
  //  这里加一是为了状态转移从0开始没问题
  let dp = Array.from(Array(text1.length + 1), () => Array(text2.length + 1).fill(0))
  for (let i = 1; i < text1.length + 1; i++) {
    for (let j = 1; j < text2.length + 1; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 想象dp数组空间覆盖顺序，dp[i-1]和dp[j-1]都存在
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[text1.length][text2.length]
};


console.log(longestCommonSubsequence('abcd', 'abc'));