/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 通过记录轮数来计算
  // 每个边添加数量通过  走几步
  let count = 0
  let width = matrix[0].length
  let height = matrix.length
  let numNumber = width * height
  let ans = []
  if (height < 2) {
    return matrix[0]
  }

  while (numNumber !== 0) {
    if (count > Math.max(width, height)) break
    // 右, 需要添加width - 2 * count - 1个
    for (let i = count; i < width - count - 1; i++) {
      if (numNumber === 0) break
      numNumber--
      ans.push(matrix[count][i])
    }
    // 下 height - 2 * count - 1个
    for (let i = count; i < height - count - 1; i++) {
      if (numNumber === 0) break
      numNumber--
      ans.push(matrix[i][width - count - 1])
    }

    // 左 width - 2 * count - 1
    for (let i = width - count - 1; i > count; i--) {
      if (numNumber === 0) break
      numNumber--
      ans.push(matrix[height - count - 1][i])
    }

    // 上 height - 2 * count - 1个
    for (let i = height - count - 1; i > count; i--) {
      if (numNumber === 0) break
      numNumber--
      ans.push(matrix[i][count])
    }
    count++
  }
  if (width === height && width % 2) {
    let index = Math.floor(width / 2)
    ans.push(matrix[index][index])
  }
  return ans
};


// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]

// let matrix = [[3], [2]]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// let matrix = [[1, 2], [3, 4]]
console.log(spiralOrder(matrix));