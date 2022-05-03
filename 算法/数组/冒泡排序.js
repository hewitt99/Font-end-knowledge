let nums = [9, 8, 7, 6, 4, 5, 3, 2, 1]

let newSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {// -i避免重复
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums
}

console.log(newSort(nums));