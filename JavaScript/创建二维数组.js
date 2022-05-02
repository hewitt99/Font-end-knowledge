// 1. 字面量
let arr = [
  [1, 2],
  [3, 4]
]

//2. Array.from({length}, fillItem)
// Array.from(arrayLike[, mapFn[, thisArg]])
// mapFn(可选)如果指定了该参数，新数组中的每个元素会执行该回调函数。
let arr2 = Array.from(Array(4), () => Array(4))
console.log(arr2.length, arr2[0].length);

//3. Array.fill().map()
let arr3 = new Array(4).fill().map(() => Array(4).fill(0))
console.log(arr3.length, arr3[0].length);
console.log(arr3);


