/**
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
function LCS(s1, s2) {
  // write code here
  let ans = "";
  let dp = new Array(s1.length + 1)
    .fill()
    .map(() => Array(s2.length + 1).fill(ans));
  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
      } else {
        dp[i][j] =
          (dp[i - 1][j].length > dp[i][j - 1].length) ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }
  return dp[s1.length][s2.length];
}


function LCS2(s1, s2) {
  // write code here
  if (s1 === null || s2 === null) return -1;
  if (s1.length === 0 || s2.length === 0) return -1;
  let rowS = s1;
  let colS = s2;
  if (rowS.length < colS.length) {
    colS = s1;
    rowS = s2;
  }
  const dp = new Array(colS.length + 1).fill("");
  for (let i = 1; i <= rowS.length; i++) {
    let cur = "";
    for (let j = 1; j <= colS.length; j++) {
      let leftTop = cur;
      cur = dp[j];
      if (rowS[i - 1] === colS[j - 1]) {
        dp[j] = leftTop + colS[j - 1];
      } else {
        dp[j] = dp[j - 1].length > dp[j].length ? dp[j - 1] : dp[j];
      }
    }
  }
  const res = dp[colS.length];
  return res === "" ? -1 : res;
}

console.log(LCS2('1A2C3D4B56', 'B1D23A456A'));
