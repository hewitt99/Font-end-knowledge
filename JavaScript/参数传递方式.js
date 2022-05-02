function setName(obj) {
  obj.name = "小猪皮皮呆"
  obj = new Object()
  obj.name = "三元大神"
}
var person = {}
setName(person)
console.log((person.name));  // 小猪皮皮呆
