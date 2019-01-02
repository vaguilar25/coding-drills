// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide(dividend, divisor) {
  // -------------------- Your Code Here --------------------
  //var division = Math.trunc(dividend / divisor) 
  //return division
  var count = 0
  for (i = 1; i < dividend; i += divisor) {
    if (dividend >= divisor) {
      count++
    }
  }

  return count
  // --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;