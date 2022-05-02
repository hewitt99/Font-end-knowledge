function sortVersion(versions) {
  if (versions.length < 2) return versions
  // write code here
  let left = []
  let right = []
  let pivot = versions[Math.floor((versions.length - 1) / 2)]
  versions.splice(Math.floor((versions.length - 1) / 2), 1)
  for (let i of versions) {
    if (i[0] > pivot[0]) {
      right.push(i)
    } else if (i[0] == pivot[0]) {
      let flag = true
      let count = 0
      while (flag) {
        if (i[count] == pivot[count]) {
          count++
          if (i[count] == undefined && undefined == pivot[count]) {
            break
          }
          i[count] = i[count] == undefined ? 0 : i[count]
          pivot[count] = pivot[count] == undefined ? 0 : pivot[count]
        } else if (i[count] === '.' && pivot[count] !== '.') {
          left.push(i)
          break
        } else if (i[count] !== '.' && pivot[count] === '.') {
          right.push(i)
          break
        } else {
          if (i[count] > pivot[count]) {
            right.push(i)
            break
          } else {
            left.push(i)
            break
          }
        }
        // else if (i[count] > pivot[count]) {// 处理一下1.4.0和1.45.0的比较，感觉要用两个指针来做
        //   right.push(i)
        //   break
        // } else {
        //   left.push(i)
        //   break
        // }
      }
    } else {
      left.push(i)
    }
  }
  return sortVersion(left).concat([pivot], sortVersion(right))
}

console.log(sortVersion(["1.45.0", "1.4.6", "6", "2.3.4.5"]));