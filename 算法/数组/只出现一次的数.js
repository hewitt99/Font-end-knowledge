/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 异或运算
  let flag = 0
  for (let item of nums) {
    flag = item ^ flag
  }
  return flag
};