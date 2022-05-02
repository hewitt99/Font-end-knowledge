//题目2
var list = [['热', '冷', '冰'], ['大', '中', '小'], ['重辣', '微辣'], ['重麻', '微麻']];

// 输出所有维度的组合，如 [['热', '冷''], ['大', '中']]  => 热+大，热+中，冷+大，冷+中

function printAll(list) {
  let result = []
  let path = []
  let dp = 0
  return backTracking(list, result, path, dp)
}


function backTracking(list, result, path, dp) {
  if (dp === list.length) {
    // result.push([...path])
    result.push(Array.from(path))
    return
  }
  // 可以剪枝优化
  for (let i = 0; i < list[dp].length; i++) {
    path.push(list[dp][i])
    backTracking(list, result, path, dp + 1)
    path.pop()
  }
  return result
}

console.log(printAll(list));

