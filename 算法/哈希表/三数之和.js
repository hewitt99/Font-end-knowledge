/**
 * @param {number[]} nums
 * @return {number[][]}
 * 哈希表不好做，用双指针
 */
var threeSum = function (nums) {
  // 这个不是回溯的组合嘛
  nums.sort()
  let path = [], result = []
  backTacking(nums, 0, 0, result, path)
  // 去重
  let temp = []
  for (let i = 0; i < result.length; i++) {
    if (!temp.includes(result[i].toString())) {
      temp.push(result[i].toString())
    } else {
      result.splice(i--, 1)
    }
  }
  return result
};

function backTacking(nums, sum, Index, result, path) {
  if (sum === 0 && path.length === 3) {
    return result.push([...path])
  }
  if (path.length === 3) return
  for (let i = Index; i < nums.length; i++) {
    path.push(nums[i])
    sum += nums[i]
    backTacking(nums, sum, i + 1, result, path)
    sum -= nums[i]
    path.pop()
  }
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));
let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
console.log(nums.sort());
console.log(nums.sort((a, b) => a - b));