/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 孙哥感染函数
  let islandNums = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        infect(grid, i, j)
        islandNums++
      }
    }
  }
  return islandNums
};

function infect(grid, i, j) {
  if (i < 0 || i >= grid.length ||
    j < 0 || j >= grid[0].length || grid[i][j] != '1') {
    return;
  }
  grid[i][j] = '2';
  infect(grid, i + 1, j);
  infect(grid, i - 1, j);
  infect(grid, i, j + 1);
  infect(grid, i, j - 1);
}
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]

console.log(numIslands(grid));