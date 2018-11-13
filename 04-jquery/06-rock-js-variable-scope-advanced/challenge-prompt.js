// Scope Review

// We're going to be asking you what the value of `tracked` will be
// at different points in this code. We want to know what the value
// of `tracked` is if we were to put a console log at that point in
// the code

// As you work through this exercise, console log out `tracked` where
// we provided the seperator console logs for the question and run
// the code to check your answer for each question before moving on 
// to the next one



var tracked = "We're";

console.log("==================== Question 01 ==================== ");
// What is the value of `tracked` here?
//  We're
console.log ("tracked Q.01: " + tracked );


loseTracked1();

function loseTracked1() {
  var tracked = "no";
}

console.log("==================== Question 02 ====================");
// What is the value of `tracked` here?
// We're
console.log ("tracked Q.02: " + tracked );

loseTracked2(tracked);

function loseTracked2(arg) {
  arg = "strangers";
}

console.log("==================== Question 03 ====================");
// What is the value of `tracked` here?
// We're
console.log ("tracked Q.03: " + tracked );


loseTracked3();

function loseTracked3(tracked) {
  console.log("==================== Question 04 ====================");
  // What is the value of `tracked` here?
  // Undefined
  console.log ("tracked Q.04: " + tracked );

}



loseTracked4();

function loseTracked4() {
  tracked = "to";
}

console.log("==================== Question 05 ====================");
// What is the value of `tracked` here?
// to
console.log ("tracked Q.05: " + tracked );


loseTracked5("love");

function loseTracked5(arg) {
  tracked = arg;
}

console.log("==================== Question 06 ====================");
// What is the value of `tracked` here?
// Love
console.log ("tracked Q.06: " + tracked );


loseTracked6("You");

function loseTracked6(arg) {
  arg = "know";

  console.log("==================== Question 07 ====================");
  // What is the value of `tracked` here?
  // Love
  console.log ("tracked Q.07: " + tracked );
}



console.log("==================== Question 08 ====================");
// What is the value of `tracked` here?
// Love
console.log ("tracked Q.08: " + tracked );


tracked = "the";

loseTracked7(tracked);

function loseTracked7(tracked) {
  tracked = "rules";

  console.log("==================== Question 09 ====================");
  // What is the value of `tracked` here?
  // rules
  console.log ("tracked Q.09: " + tracked );

}



console.log("==================== Question 10 ====================");
// What is the value of `tracked` here?
// the

console.log ("tracked Q.10: " + tracked );

loseTracked8("and");

function loseTracked8(arg) {
  var tracked = arg;

  console.log("==================== Question 11 ====================");
  // What is the value of `tracked` here?
  // and
  console.log ("tracked Q.11: " + tracked );

}



console.log("==================== Question 12 ====================");
// What is the value of `tracked` here?
// the
console.log ("tracked Q.12: " + tracked );

var newTracked = "so";

function loseTracked9() {
  tracked = newTracked;  
}

console.log("==================== Question 13 ====================");
// What is the value of `tracked` here?
// the
console.log ("tracked Q.13: " + tracked );

loseTracked10("do");

function loseTracked10(newTracked) {
  newTracked = "I";
}

tracked = newTracked;

console.log("==================== Question 14 ====================");
// What is the value of `tracked` here?
// so
console.log ("tracked Q.14: " + tracked );



tracked = 12;

loseTracked11(tracked);

function loseTracked11(arg) {
  arg = 14;
}

console.log("==================== Question 15 ====================");
// What is the value of `tracked` here?
// 12

console.log ("tracked Q.15: " + tracked );

tracked = false;

loseTracked12(tracked);

function loseTracked12(arg) {
  arg = true;
}

console.log("==================== Question 16 ====================");
// What is the value of `tracked` here?
// false
console.log ("tracked Q.16: " + tracked );


tracked = {a: "hello", b: "world"};

loseTracked13(tracked);

function loseTracked13(arg) {
  arg = "goodbye";
}

console.log("==================== Question 17 ====================");
// What is the value of `tracked` here?
//[object][object]
console.log ("tracked Q.17: " + tracked );


tracked = ["variable", "scoping", "is"]

loseTracked14(tracked);

function loseTracked14(arg) {
  arg = "fun";
}

console.log("==================== Question 18 ====================");
// What is the value of `tracked` here?
// "variable", "scoping", "is"
console.log ("tracked Q.18: " + tracked );


tracked = ["Testing", "Arrays"];

loseTracked15(tracked);

function loseTracked15(arg) {
  arg[0] = "WHAT!?";
  arg.pop();
  arg.push("Arrays!")

  console.log("==================== Question 19 ====================");
  // What is the value of `tracked` here?
  // "WHAT!, "Arrays!"
  console.log ("tracked Q.19: " + tracked );
}


console.log("==================== Question 20 ====================");
// What is the value of `tracked` here?
// "WHAT!, "Arrays!"
console.log ("tracked Q.20: " + tracked );


tracked = {how: "about", objects: "?"}

loseTracked16(tracked);

function loseTracked16(arg) {
  var key = "how";
  arg.key = "Dot Notation!";
  arg[key] = "Bracket Notation!";

  console.log("==================== Question 21 ====================");
  // What is the value of `tracked` here?
  // Object
  console.log ("tracked Q.21: " + tracked  );
}




console.log("==================== Question 22 ====================");
// What is the value of `tracked` here?
// Object

console.log ("tracked Q.22: " + tracked  );

tracked = "Never Gonna Give You Up";

loseTracked17(tracked);

function loseTracked17(arg) {
  arg[0] = "R";
  arg[1] = "ick";

  console.log("==================== Question 23 ====================");
  // What is the value of `tracked` here?
  // Object
  console.log ("tracked Q.23: " + tracked  );
}



console.log("==================== Question 24 ====================");
// What is the value of `tracked` here?
// "Never Gonna Give You Up"
console.log ("tracked Q.24: " + tracked  );