/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let arr = [];
  for (let i of nums) {
    if (i > arr[arr.length - 1]) {
      arr.push(i);
      continue;
    }
    else {
      let r = arr.length - 1;
      let l = 0;
      while (l < r) {
        let mid = parseInt((l + r) / 2);
        if (arr[mid] >= i) {
          // 左侧再分
          r = mid;
        } else {
          l = mid + 1;
        }
      }
      arr[l] = i;
      // if (l == r) {
      //   console.log('找到了');
      // }
    }
  }
  return arr.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));