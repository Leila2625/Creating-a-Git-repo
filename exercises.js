exercises.js
// 3-1. flattening(list)

// An array containing arrays
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
[1, 2, 3, 4, 5, 6]
// Using reduce to flatten the array using the reduce and concat method + the spread operator
let flattenArray = arrays.reduce(function(accumulator, currentArray) {
    return accumulator.concat(...currentArray);
  }, []);

// Hold the result
let func1 = flattenArray;


/* ---------------------------- Section Divider ----------------------------- */

// 3-2. loop(value, test, update, body)

// Your code here.

// Pass a number, first function, second function, and a third function (console.log)
function loop(value, testFunction, updateFunction, bodyFunction) {

    // Start with the upper bound and decrement down by 1
    for(let i = value; i > 0; i--){
        // Pass the value through the function (A simple comparison - is the value greater than zero)
        testFunction(value);
        // Pass the value through the function (console.log(value))
        bodyFunction(value);
        // Pass the value through the function (Takes the value and substract 1 from it - overwrite value with this new value)
        value = updateFunction(value);
    }

}

// Pass a number, first function, second function, and a third function (console.log)
let func2 = loop(3, n => n > 0, n => n - 1, console.log);


/* ---------------------------- Section Divider ----------------------------- */

function everyLoop(array, test){

  // Iterate through an array to determine if a statement is true or false
  for(let i = 0; i < array.length; i++){
    // If the statement (is not true or false) return false
    if(!test(array[i])){
        return false;
    }
  }
  // Else return true
  return true;
}

function everySome(array, test){
    // The some method iterates through the array of elements - returns true if one instance is true
    // Each element is pass through an anonymous function
    // Each element is pass through another function called test
    // If the test function (is not true or false) than it returns false
    // If the test function (is not false or true) than it returns true
    return !array.some(element => !test(element));
}

//console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
let func3 = everyLoop([2, 4, 16], n => n < 10);
// → false
//console.log(everyLoop([], n => n < 10));
// → true

//console.log(everySome([1, 3, 5], n => n < 10));
// → true
//console.log(everySome([2, 4, 16], n => n < 10));
// → false
let func4 = everySome([], n => n < 10);
// → true

/* ---------------------------- Section Divider ----------------------------- */

// Exporting functions
export{ func1, func2, func3, func4 };
