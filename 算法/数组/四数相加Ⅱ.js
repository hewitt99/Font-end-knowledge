/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  // 两个map就能搞定
  let map = new Map
  for (let i of nums1) {
    for (let j of nums2) {
      if (map.get(i + j) !== undefined) {
        map.set(i + j, map.get(i + j) + 1)
      } else {
        map.set(i + j, 1)
      }
    }
  }
  let count = 0
  for (let m of nums3) {
    for (let n of nums4) {
      if (map.has(0 - m - n)) {//匹配上了
        count += map.get(0 - m - n)
      }
    }
  }
  return count
};

console.log(fourSumCount([1, 2],
  [-2, -1],
  [-1, 2],
  [0, 2]));