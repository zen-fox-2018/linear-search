'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  // return values.findIndex(x => x === target)
  for (let i = 0 ; i < values.length ; i++) {
    if(values[i] === target){
      return i
    }
  }
  return -1
  //write your code here
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let arr = []
  for (let i = 0 ; i < values.length ; i++) {
    if( values[i] === target) {
       arr.push(i)
    }
  }
  return arr
  // var arr = [];
  // var index = values.indexOf(target);
  // while (index != -1) {
  //   arr.push(index);
  //   index = values.indexOf(target, index + 1);
  // }
  // return arr
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
