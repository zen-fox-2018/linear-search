'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var result = 0
  for (let i = 0; i < random_numbers.length; i++) {
    var found = true
    if (target === random_numbers[i]) {
      debugger
      return i
    } 
    else {
      found = false
    }
  }
  return (found === false) ? -1 : result[0]
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var result = []
  for (let i = 0; i < values.length; i++) {
    if (values[i] === target) {
      result.push(i)
    }
  }
  return result
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
