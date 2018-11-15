// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

setTimeout(fiveSeconds, 1000 * 5);
function fiveSeconds() {
    alert("Question 1");
}

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
setTimeout(q2, 1000 * 15);
function q2() {
    alert("Question 2");
}


// Remove the timer you just made for Question 2

clearTimeout(q2);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
setTimeout(q31, 1000 * 15);
function q31() {
    alert("Question 3 Part 1");
}


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
setTimeout(q32, 1000 * 16);
function q32() {
    alert("Question 3 part 2");
}


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(q31);
clearTimeout(q32);

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
setTimeout(q5,1000*15);
function q5() {
    console.log("Question 5 Completed!");
}

//setTimeout(function() {console.log("Question 5 Completed!")}, 1000 * 11);
