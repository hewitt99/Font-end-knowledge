/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length
  nums.sort((a, b) => a - b)
  let res = []

  for (let i = 0; i < len; i++) {
    let pre = i + 1, cur = len - 1
    while (pre < cur) {
      let sum = nums[i] + nums[pre] + nums[cur]
      if (sum < 0) {
        pre++
        continue
      }
      if (sum > 0) {
        cur--
        continue
      }
      res.push([nums[i], nums[pre], nums[cur]])
      while (nums[pre] === nums[++pre]) { }// 去重
      while (nums[cur] === nums[--cur]) { }
    }
  }
  return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

let pre = 0
let arr = [0, 0, 1]
while (arr[pre] == arr[++pre]) { console.log(pre); }