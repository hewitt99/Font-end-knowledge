// 得到两数之间的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //不含最大值，含最小值
}

let arr = [];
for (let i = 0; i < 10; i++) {
  let item = getRandomInt(1, 100);
  arr.push(item);
}

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}
// console.log(arr);
console.log(BubbleSort(arr))