/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 从右往左找，找到第一个左小于右的，记录index，把index右侧的冒泡排序
  // index交换大于且最小的（排完序后是前面的，用while第一个遇到
  let front = 0
  let behind = 0
  let temp = 0
  let flag = false
  let len = nums.length

  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      front = i - 1
      behind = i
      flag = !flag
      break
    }// 找到了
  }

  // 找到了，右侧冒泡
  if (flag) {
    for (let i = behind; i < len - 1; i++) {
      for (let j = behind; j < len - 1 - (i - behind); j++) {
        if (nums[j] > nums[j + 1]) {
          temp = nums[j]
          nums[j] = nums[j + 1]
          nums[j + 1] = temp
        }
      }
    }
    temp = nums[front]
    //换右侧第一个比左大的
    while (nums[front] >= nums[behind]) behind++
    nums[front] = nums[behind]
    nums[behind] = temp
    return nums
  } else {
    return nums.reverse()
  }


};


console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([2, 3, 1, 3, 3]));