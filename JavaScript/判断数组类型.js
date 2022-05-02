let arr = [1, 2, 3]

console.log(Object.prototype.toString(arr));
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.__proto__.constructor === Array);