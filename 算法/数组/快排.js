/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) { return nums }
  let left = [], right = []
  let pivot = nums[Math.floor((nums.length - 1) / 2)]
  nums.splice(nums.indexOf(pivot), 1)
  for (let i of nums) {
    if (i < pivot) {
      left.push(i)
    } else {
      right.push(i)
    }
  }
  return sortArray(left).concat([pivot], sortArray(right))
};

alert(sortArray([5, 2, 3, 1]))