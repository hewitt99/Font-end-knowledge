/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 双指针
  // 逻辑：ans+= foot.val, if(ans>target){head++, ans-=head.val}
  let head = 0, foot = 0;
  let ans = nums[0];
  let min = Infinity;
  // 审题，是 >= 情况满足
  while (head !== nums.length - 1) {
    if (ans < target) {
      ans += nums[++foot];
    } else if (ans >= target) {
      min = Math.min(min, (foot - head + 1));
      ans -= nums[head++];
    } else {
      return 0
    }
  }
  return min
};

minSubArrayLen(11, [1, 2, 3, 4, 5])
