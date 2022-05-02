/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map()
  for (let i of s) {
    if (map.has(i)) {
      continue
    } else {
      map.set(i, 1)
    }
  }

  for (let j of t) {
    if (map.has(j)) {
      map.set(j, 0)
    } else {
      return false
    }
  }
  for (let x of map.values()) {
    if (x == 1) {
      return false
    }
  }
  return true
};

console.log(isAnagram('anagram', 'nagaram'));
let map = new Map
count = 2
while (count) {
  map[1] = map[1] === undefined ? 0 : map[1]++
  count--
}
console.log(map);