/**
 * 组合串识别统计
 * 有一个符串系列，帮忙统计各种合法组合串出现的频次。
 * 其中定义前导符为[0X01,0X02,0X03],非空字符(字母、数字)作为内容段,
 * 前导符必须与内容段组合成为一个组合串，其中前导符可一个或多个(不重复)，内容段仅能一个。
 * 
 * 按频次由大至小输出，相同频次以出现次序由先至后输出:
 * [0X02+1=2, 0X01+2=1, 0X01+0X03+A=1]
 */

var str = '0X01,2,0X02,1,0X01,0X03,A,0X02,1'

function getSum(str) {
  const BaseType = ['0X01', '0X02', '0X03']
  let list = str.split(',')
  let map = new Map()
  let tempName = []

  for (let i = 0; i < list.length; i++) {
    if (BaseType.includes(list[i])) {
      tempName.push(list[i])
    } else {
      // 看有无
      tempName.push(list[i])
      let key = tempName.join('+')
      if (map.has(key)) {
        map.set(key, map.get(key) + 1)
      } else {
        map.set(key, 1)
      }
      tempName = []//最后都置空
    }
  }
  let outputList = Array.from(map)
  //  outputList: [ [ '0X01+2', 1 ], [ '0X02+1', 2 ], [ '0X01+0X03+A', 1 ] ]
  outputList.sort((a, b) => b[1] - a[1])
  return outputList.map((item) => item.join('='))
}

console.log(getSum(str));