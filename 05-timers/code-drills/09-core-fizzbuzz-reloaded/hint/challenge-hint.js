// Wibble Wobble

// This function checks whether the argument string fulfills the requirements
// for "Wibble". It should return true if the string has an even number of characters
// and false if it doesn't
function checkWibble(str) {
  // ---------- Your Code Here ----------

  // check if the `str` has an even number of characters
  // return true if it does and false if it doesn't

  if ((str.length % 2) === 0) {
    return true
  } else {
    return false
  }

  // ----------- End Code Area -----------
}


// This function checks whether the argument string fulfills the requirements
// for "Wobble". It should return true if the string has an odd number of vowels
// and false if it doesn't
function checkWobble(str) {
  // ---------- Your Code Here ----------

  // create a string of the all vowels for us to check the letters against

  var vowels = "aeiou";

  // declare a variable to track the number of vowels in the world and 
  // instantiate it to 0
  var trackVowels = 0;


  // iterate through the characters in the `str`
  for (i = 0; i < str.length; i++) {


    // if the currect letter is a vowel, increment the variable used to track the
    // number of vowels
    if (vowels.includes(str[i])) {

      trackVowels += 1;
    }
    // check if the number of vowels is odd
    // return true if it is and false if it isn't

    


  }
  if ((trackVowels % 2) !== 0) {
    return false
  } else {
    return true
  }

}
// ----------- End Code Area -----------



// This is the `wibbleWobble` function. It takes in an array of strings and replaces
// the elements that have an even number of characters with "Wibble" and the elements
// that have an odd number of vowels with "Wobble". If a element has both an even number
// of characters and an odd number of vowels, it should replace that element with
// "WibbleWobble". 

function wibbleWobble(arr) {
  // ---------- Your Code Here ----------

  // iterate through the array

  for (i = 0; i < arr.length; i++) {

    // check whether the current element passes the "Wibble" test

      var passWibble = checkWibble(arr[i]);
      var passWobble = checkWobble(arr[i]);

    if (passWibble && passWobble) {

      // check whether the current element passes the "Wobble" test



      // if the element passed both tests, replace it with "WibbleWobble"

      arr[i] = "WibbleWobble";

      // if the element only passed the "Wibble" test, replace it with "Wibble"

    } else if (passWibble ) {
      arr[i] = "Wibble";

    } else if ( passWobble) {

      // if the element only passed the "Wobble" test, replace it with "Wobble"
      arr[i] = "Wobble";
    }

  }

  // ----------- End Code Area -----------
  console.log(arr);
  return arr;
}


// The following code will call on your function and display the results on the webpage
$(function () {

  // This is the array we're going to use to test your code:
  var testArray = [
    "respond",
    "even",
    "banana",
    "hello",
    "goodbye",
    "yes",
    "okay",
    "seeks",
    "desk",
    "chair",
    "amazing",
    "wonder",
    "excel",
    "achieves",
    "someone",
    "people",
    "odd"
  ]

  // Make a copy of the testArray to use with the `wibbleWobble` function
  var newArray = wibbleWobble(testArray.slice(0));

  // This populates our table with the initial values of the array
  // and what they are after our `wibbleWobble` function
  for (var i = 0; i < testArray.length; i++) {
    var newRow = $("<tr>");
    newRow.append($("<td>").text(testArray[i]));
    newRow.append($("<td>").text(newArray[i]));
    $("#display").append(newRow);
  }

})