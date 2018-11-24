// declare a variable to store the user userKeyPress and set it to an empty array for now
var user_userKeyPress = [];

// create a string of all the valid userKeyPresss for our validation logic to check against

var valid_userKeyPresss = "0123456789+-*=/c";

// ==================== Evaluation Function ====================
//
// create function that takes in an array and evaluates that array as a mathematical function
// Feel free to come back to this function later if you want to. We will not be using this
// immediately.
//
// =============================================================
function evaluate(arayMath) {

  // declare 3 variables, one for the first number, one for the second, and one for the operator
  // set the variables for the numbers to be an empty string for now

  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  // iterate through the array from the argument

  for (i = 0; arrayMath.length; i++) { }
  // if the operator is already defined
  // not being defined is a "falsey" value and will evaluate to false in the if statement
  // if operator has a value, it will evaluate to true

  if (operator) {
    // append the current element to the end of the second number
    secondNumber = secondNumber + arrayMath[i];
  } else {


    // if the operator hasn't already been defined
    if (arrayMath[i] === "+" || arrayMath[i] === "-" || arrayMath[i] === "*" || arrayMath[i] === "/") {

      // check if the the current element is an operator
      operator = arrayMath[i];

      // if the current element is an operator, set the value of our operator variable to
      // be the current element

    } else {
      // if the current element is not an operator

      firstNumber = firstNumber + arrayMath[i];
      // append it to the end of the first number
    }


  }
  // after we've iterated through the array, parse the first and 
  // second numbers into integers from strings

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  // then, check if the operator is a '+' sign

  if (operator === "+") {
    // if the operator is a '+' sign, return the value of the first number added to the second number

    return firstNumber + secondNumber;
    // if the operator isn't a '+' sign, check if the operator is a '-' sign
  } else if (operator === "-") {

    // if the operator is a '-' sign, return the value of the first number subtracted from the second number
    return firstNumber - secondNumber;

    // if the operator isn't a '-' sign, check if the operator is a '*' sign
  } else if (operator === "*") {

    // if the operator is a '*' sign, return the value of the first number multiplied by the second number
    return firstNumber * secondNumber;

    // if the operator isn't a '*' sign, check if the operator is a '/' sign

  } if (operator === "/") {
    // if the operator is a '/' sign, return the value of the first number divided by the second number
    return firstNumber / secondNumber;
  }

}

// ==================== Event Listener ====================
//
// Create an event listener that listens to user key presses
//
// ========================================================

document.onkeyup = function (userKeyPress) {

  // check to make sure the user pressed a valid button (check the userKeyPress against the array we made)
  var keyPress = userKeyPress.key;
  expression = [];
  if (valid_userKeyPresss.includes(keyPress)) {

    // if the userKeyPress was valid, check if it was the letter 'c'
    if (keyPress === 'c') {

      // if it was 'c', set the expression array back to an empty string and clear the results
      // output area on the webpage
      
      document.getElementById("result").textContent = "";

    }
    // if the userKeyPress wasn't the letter 'c', check if it was an '='
    else if (keyPress === '=') {

      // if it was an '=', send the user expression into our array expression evaluator function
      var result = evaluateArray(expression);

      // then, output the results of that function into the results area of our webpage
      document.getElementById("result").textContent = result;
    }

    // if the userKeyPress wasn't an '=', check whether it was an operator
    else if (keyPress === '+' || keyPress === '-' || keyPress === '*' || keyPress === '/') {

      // if it was an operator, check whether an operator already exists in the user expression array
      if (expression.includes("+") || expression.includes("-") || expression.includes("*") || expression.includes("/")) {

        // if it already exists, output a message to the results area on the webpage telling the user
        // that they already userKeyPress an operator
        document.getElementById("result") = "You've already userKeyPress an operator!"

      }

      // if there wasn't already an operator, add the userKeyPress to the expression
      else {
        expression.push(keyPress);
      }
    }

    // if it wasn't an operator, then it must be a number because we've gone through all the other
    // valid userKeyPresss, so store that number into the expression array
    else {
      expression.push(keyPress)
    }
  }

  // if the userKeyPress wasn't valid, output an error message to the results area on the webpage
  else {
    document.getElementById("result").textContent = "Please press a valid key";
  }


  // finally, outside the 'if-else' statement, set the textContent of the user expression div
  // to be our expression array
  document.getElementById("user-input").textContent = expression;

}

