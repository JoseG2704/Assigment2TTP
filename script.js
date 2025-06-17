// forEach()
function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
problem1 = "#1 forEach(), myEach()";
console.log(problem1);
//test
let numbers = [1, 2, 3, 4, 5];
myEach(numbers, function(num) {
  console.log(num);
})

