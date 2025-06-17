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


// #6 reduce() //
function myReduce(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;

}
//test
problem6 = "#6 reduce(), myReduce()";
console.log(problem6);
let sum = myReduce([1, 2, 3, 4, 5]);
console.log(sum)

//#7 includes()
function myIncludes(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target)
            return true;

    }
    return false;

}
console.log("myIncludes:", myIncludes(["a", "b", "c"], "a"));


//#8 indexOf()
function myIndexOf(array, target) {

    for (i = 0; i < array.length; i++) {
        if (array[i] === target)
            return i;

    }
    return -1;

}
console.log("myIndexOf:", myIndexOf(["a", "b", "c"], "c"));


//#9 push()
function myPush(array, elementToAdd) {
    array[array.length] = elementToAdd;
    return array.length;

} 
let testArray = ["blueberry", "apple"];
console.log("myPush:", myPush(testArray, "oranges"));
console.log("Array after push:", testArray);


//#10 lastIndexOf()
function myLastIndexOf(array, target) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === target) return i;
    }
    return -1;

} 
console.log("myLastIndexOf;", myLastIndexOf(["a", "b", "c", "b"], "b"));


//#11 Object.keys()
Object.grabKeys = function (obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) keys.push(key);
    }
    return keys;
};
console.log("grabKeys:", Object.grabKeys({ name: "Albert", age: 27 })); 


//#12 Object.values()
Object.grabValues = function (obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) values.push(obj[key]);

    }
    return values;

};
console.log("grabValues:", Object.grabValues({ name: "Ricky", age: 22 }));
