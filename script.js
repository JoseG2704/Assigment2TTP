// forEach() //
function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

//test
problem1 = "#1 forEach(), myEach()";
console.log(problem1);
let numbers = [1, 2, 3, 4, 5];
myEach(numbers, function(num) {
  console.log(num);
}) 


// map() //
function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let NewItem = callback(arr[i], i, arr);
    result.push(NewItem);
  }
  return result;
}
//test
problem2 = "#2 map(), myMap()";
console.log(problem2);
let numbers2 = [1, 2, 3, 4, 5];

let doubledNumbers = myMap(numbers2, function(number) {
  return number * 2;
});

console.log(doubledNumbers)