let str = 'i am a student.'
let str2 = 'how old are you?'
function reverseStr(str) {
  let arr = str.split(' ');
  return arr.reverse()
}

console.log(reverseStr(str2).join(' '));