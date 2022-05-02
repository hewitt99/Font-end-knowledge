// map reduce filter forEach

// 1.forEach
let arr = [1, 2, 3, 4, 5, 6]
arr.forEach(function (value, index, array) {
  // 无返回值，arr中有几项，就调用几次
  // arr[index] === value
  // array是数组本身
})

let res = arr.forEach((value, index, array) => {
  array[index] = value * 2
})
console.log('===forEach===');
console.log(res); // undefined
console.log(arr); // 在fn中通过 索引 被改变了，本身不对数组改变


// 2.map
res = arr.map(function (value, index, array) {
  // return array[index] = value / 2
  return value / 2
})// 浅拷贝，array是地址
console.log('===map===');
console.log(res);
console.log(arr);

// 3. every()
//例子：判断arr中的元素是否都为正数

var isEvery = arr.every(function (item, index, array) {
  array[index] = item * 2
  return item > 0
})
console.log('===every===');
console.log(isEvery) // false
console.log(arr);

//4. some()
//例子：判断数组arr中是否存在负数
var isSome = arr.some(function (item, index, array) {
  return item < 0;
});
console.log('===some===');
console.log(isSome); // false

//5. filter
// 例子：筛选出数组arr中所有负数, 返回的组成一个新的数组
var minus = arr.filter(function (item, index, array) {
  return item < 0;
});
console.log(minus);   // [-2, -5]

// 以上五大方法除了传递一个匿名函数作为参数之外
// 还可以传第二个参数，该参数用于指定匿名函数内的this指向
//例子
// 只传一个匿名函数
console.log('===this===');
arr.forEach(function (item, index, array) {
  if (index == array.length - 1) {
    console.log(this);  // window
  }
});
// 传两个参数
arr.forEach(function (item, index, array) {
  if (arr.length - 1 === index) {
    console.log(this);  // [1, -2, 3, 4, -5]
  }
}, arr);



// 6. reduce()
var init = 0
arr.reduce(function (prev, cur, index, array) {
  // array——原数组
  // prev——上一次调用回调时的返回值，或者初始值init
  // cur——当前正在处理的数组元素
  // index——当前正在处理的数组元素的索引
  // init——初始值
}, init)

// 6.1 数组求和
console.log('===reduce===');
res = arr.reduce((pre, cur) => {
  return pre += cur// 为传入初始值，默认pre是数组第一项，cur是数组第二项
})
console.log(res);

// 6.2 求数组最大值
res = arr.reduce((pre, cur) => {
  return Math.max(pre, cur)// 为传入初始值，默认pre是数组第一项，cur是数组第二项
})
console.log(res);

// 6.3 数组去重
console.log('===数组去重===');
res = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    pre.push(cur)
  }
  return pre// 为传入初始值，默认pre是数组第一项，cur是数组第二项
}, [])
console.log(res);

// 6.4 求字符串中字母出现的次数
console.log('===字符串中字母出现的次数===');
let str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmx';
res = str.split('').reduce((pre, cur) => {
  pre[cur] ? pre[cur]++ : pre[cur] = 1
  return pre
}, {})
console.log(res);

// 6.5将数组按一定的规则转成数组


// 6.6扁平一个二维数组
console.log('===扁平化===');
arr = [[1, 2, 8], [3, 4, 9], [5, 6, 10]];
res = arr.reduce((pre, cur) => {
  return pre.concat(cur)
})
console.log(res);


// 7 for-in
arr = [1, 2, 3]
console.log('===for-in===');
res = []
for (let i in arr) {
  res.push(i)
}//  一般是对对象obj的key遍历
console.log(res);

// 8. for-of
console.log('===for-of===');
res = []
for (let i of arr) {
  res.push(i)
}
console.log(res);

// || 或 && 两端是表达式

// 1）|| 操作符从左开始判断表达式的真假
// 如果为真，返回左边表达式返回的值；如果为假，则继续判断右边的表达式
// 2）&& 操作符从左开始判断表达式
//如果左边的表达式被判断为假, 这马上返回false, 不管右边的表达式是否为真；如果左边的表达式为真, 则继续判断右边的表达式, 然后返回右边表达式结果