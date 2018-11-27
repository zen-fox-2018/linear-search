'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  // values = values.sort(function(a,b){return a>b})

  // insertion sort here
  for (let i = 0 ; i < values.length -1 ; i++){
    for (let j = i + 1 ; j >= 0 ; j--){
      if (values[j] < values[j-1]){
        let tmp = values[j]
        values[j] = values[j-1]
        values[j-1] = tmp
      }
    }
  }
  // console.log(values)

  let output = -1
  for (let i = 0 ; i <values.length ; i++){
    if (values[i] == target){
      return values[0]
    }
  }
  return output
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  let output = []
  for (let i = 0 ; i < values.length ; i++){
    if (values[i] === target){
      output.push(i)
    }
  }
  return output
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
