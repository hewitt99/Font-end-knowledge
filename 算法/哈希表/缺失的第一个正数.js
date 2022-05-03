/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 模拟hash表
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nums[i] = len + 1
    }
  }

  for (let i = 0; i < len; i++) {
    let temp = Math.abs(nums[i])// 注意
    if (temp <= len) {
      nums[temp - 1] = -Math.abs(nums[temp - 1])
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }
  return len + 1
};


console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([-5]));