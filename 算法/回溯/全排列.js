/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let path = []
  let used = []
  let ans = []
  backTacking(nums, path, used, ans)
  return path
};

function backTacking(nums, path, used, ans) {

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue
    path.push(nums[i])
    used[i] = true
    backTacking(nums, path, used, ans)
  }
  // 全加入了退出
  ans.push(path)
  path.pop()
  used[nums.length - 1] = false
  return
}

console.log(permute([1, 2, 3]));