const list = [
  { id: 04, pid: 03 },
  { id: 01, pid: null },
  { id: 02, pid: null },
  { id: 03, pid: 01 },
  { id: 05, pid: 01 },
  { id: 06, pid: 03 },
  { id: 07, pid: 02 },
  { id: 09, pid: 02 },
  { id: 10, pid: 07 },
]
// 转化为树形结构
// tree:[]

function getTree(list) {
  let map = new Map()
  let arrToRes = []//重新找爹
  for (let i = 0; i < list.length; i++) {
    map.set(list[i].id, list[i])
    // 通过有无pid
    if (list[i].pid) {
      let nowPid = list[i].pid
      if (map.has(nowPid)) {//有爹
        if (map.get(nowPid).hasOwnProperty('children')) {// 有无属性
          map.get(nowPid).children.push(list[i])
        } else {
          map.get(nowPid).children = [list[i]]
        }
      } else {
        arrToRes.push(list[i])// 有爹没找到
      }
      list.splice(i, 1)
      i--
    }
    // 无爹啥也不做
  }
  while (arrToRes.length !== 0) {
    let node = arrToRes.shift()
    let nowPid = node.pid
    if (map.has(node.pid)) {
      map.get(nowPid).hasOwnProperty('children') && map.get(nowPid).children.push(node)
      !map.get(nowPid).hasOwnProperty('children') && (map.get(nowPid).children = [node])
    }
  }
}
getTree(list)
console.log(list);