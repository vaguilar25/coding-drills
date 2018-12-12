/*Write a function called "smallestNumber".

Given an array of mixed elements, "smallestNumber" returns the smallest number in the array

ignore values that aren't numbers

Starter Code :*/
function smallestNumber(arr) {
  // code starts here
  var arrayNumbers = [];
  for (i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      arrayNumbers.push(arr[i]);
    }
  }

  console.log (arrayNumbers);

  Array.min = function( array ){
    return Math.min.apply( Math, array );
};

var minimum = Array.min(arrayNumbers);

return (minimum);


  // code ends here
}
var output = smallestNumber([4, 'lincoln', 9, 'octopus', 'a', 5, 10, 'hello']);
console.log(output); // --> 4