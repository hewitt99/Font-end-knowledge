/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let count = 0
  let sum = 0
  let backTracing = function (ans) {
    if (ans > target) {
      return
    }
    for (let i of candidates) {
      ans += i
      if (ans === target) {
        count++
        continue
      }
      backTracing(ans)
    }
  }
  backTracing(sum)
  return count
};


combinationSum([2, 3, 6, 7], 7)