// forEach() //
function myEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//test
problem1 = "#1 forEach(), myEach()";
console.log(problem1);
let numbers = [1, 2, 3, 4, 5];
myEach(numbers); // Output: 1 2 3 4 5



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

// filter() //
function myFilter(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
}
//test
problem3 = "#3 filter(), myFilter()";
console.log(problem3);
let filteredNumbers = myFilter([1, 2, 3, 4, 5]);
console.log(filteredNumbers); 