// #1 forEach() //
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



// #2 map() //
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

// #3 filter() //
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

// #4 some() //
function mySome(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}
//test
problem4 = "#4 some(), mySome()";
console.log(problem4);
let hasEvenNumber = mySome([1, 3, 5, 7, 8]);
console.log(hasEvenNumber); 

// every() //
function myEvery(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false; //if ood is found
    }
  }
  return true;//all even
}
//test
problem5 = "#5 every(), myEvery()";
console.log(problem5);
let allEven = myEvery([2, 4, 6, 8]);
console.log(allEven); 

