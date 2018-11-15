// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var q1 = setInterval(questionOne,1000*5);
function questionOne() {
    console.log("Question one");
};

//var q1 = setInterval(function() {console.log("Question one")}, 1000*5 ); this is the same


// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds

var q2 = setInterval(questionTwo,1000*10);
function questionTwo() {
    alert("Question two");
};

// Clear the interval you made in this question

clearInterval(q2);

// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var q3 = setInterval(questionThree,1000*2);
function questionThree() {
    $("#question-03").append("3");
};


// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds

var clearIntervalQ03 = setInterval(clearQuestion,6000);
function clearQuestion() {

    $("#question-03").empty();
};

// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var q5 = setInterval(questionFive,1000);
function questionFive() {
    $("#question-05").append("5");
};

var clearIntervalQ05 = setTimeout(clearQuestion5,1000*5);
function clearQuestion5() {
    clearInterval(q5);
};

// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second

var q6 = setInterval(questionSix,1000*1);
function questionSix() {
    $("#question-06").append("6");
};



// Create a timer to clear the interval after 6 seconds

var stop6 = setTimeout(function() {
    clearInterval(q6)
}, 6000)
// var clearIntervalQ06 = setInterval(clearQuestion6,6);
// function clearQuestion6() {
//     clearInterval(clearIntervalQ06);
// };

// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds

var clearIntervalQ07 = setInterval(clearQuestion7,10);
function clearQuestion7() {
   
clearInterval(q1);
};
