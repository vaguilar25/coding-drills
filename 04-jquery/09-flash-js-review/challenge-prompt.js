console.log("==================== Question 01 ====================");

// make a variable named `word` and set it to an empty string
var word = "";
// append the string "hello" to `word`
word += "hello";

// append a space to `word`
word += " ";

// append the string "world" to `word`
word += "world";

// console.log the `word` variable

console.log(word);

console.log("==================== Question 02 ====================");

// iterate through the `word` variable and console.log each character inside of it
for (var i = 0; i < word.length; i++) {

    console.log(word.charAt(i));
};


console.log("==================== Question 03 ====================");

var animal = "the fox says";

// use the `indexOf` method to console log the index of the letter "x" 
// in the `animal` variable. Do not hard code in the number you want to console
// log.
console.log(animal.indexOf('x'));


console.log("==================== Question 04 ====================");

animal = "the giraffe says sup";

// using `indexOf`, console log `true` if the string "says" is in the `animal` 
// variable and `false` if it's not
if (animal.indexOf("says") !== -1) {
    console.log("true" );
} else {
    console.log("false");
}

// using `indexOf`, console.log `true` if the string "zebra" is in the `animal` 
// variable and `false` if it's not.

if (animal.indexOf("zebra") !== -1) {
    console.log("true" );
} else {
    console.log("false");
}


console.log("==================== Question 05 ====================");

// what is the index of the first character of a string?
//0


console.log("==================== Question 06 ====================");

var word = "fiesta";

// console log the "e" in `word` without explicitly using the string "e"

console.log(word.charAt(2));

console.log("==================== Question 07 ====================");

var greeting = "apple banana chicken";
greeting = greeting.replace(/a/g, 'g');

// what is the value of the variable greeting? gpple bgngng chicken

console.log(greeting);

console.log("==================== Question 08 ====================");

word = "apple";

// console.log "ppl" from `word` without using the letters "ppl"

// HINT: You are looking for a slice of this string, not the whole pie

console.log(word.substr(1,3));

console.log("==================== Question 09 ====================");

word = "the giraffe said hi";

// Capitalize the first letter in the `word` variable 
// console log your modified `word` variable
console.log(word.charAt(0).toUpperCase());


console.log("==================== Question 10 ====================");

animal = "moose"; 

//write code here to change the center o to z
animal=animal.replace("o","z");
console.log(animal);


console.log("==================== Question 11 ====================");

// make a variable named `dogs` and initialize it to an empty array
var dogs = [];

// append the string "rover" into the `dogs` array
dogs.push("rover");

// append the string "hunter" into the `dogs` array
dogs.push("hunter");

// append the string "oak" into the `dogs` array
dogs.push("oak");

// console.log out the length of the `dogs` array
console.log(dogs.length);


console.log("==================== Question 12 ====================");

var letters = ['h', 'c', 'i', 'r'];

// reverse the order of the `letters` array
letters.reverse();

// convert the `letters` array into a string and console log it

console.log(letters.join());

console.log("==================== Question 13 ====================");

var famousToms = ["Tom Cruise", "Tom Hanks", "Tom Keel"];

// write code below to replace "Tom Hanks" with "Tom Petty" 
// in the `famousToms` variable
famousToms[1]=famousToms[1].replace("Tom Hanks", "Tom Petty");

// declare a variable named `nums` and set it to an empty array
var nums = [];

// on the next line write code to add numbers 1 to 1000 into the nums array
for (i=1;i<1001;i++) {
    nums.push(i);
}



console.log("==================== Question 14 ====================");

// write a function named `doubleLength` that takes in a string and returns
// the length of that string multiplied by 2
function doubleLength(word) {
    var length = word.length * 2
    return length
};

// call the `doubleLength` function with a value of "allen" and console log 
// the return value
console.log(doubleLength("allen"));

console.log("==================== Question 15 ====================");

// make a variable named `nums` and set it to be an array with the 
// numbers 1002 and 1001 in it.
var nums =[1002,1001];

// on the next line write code to push the number from 1000 down to 1 
// into the nums array. The final array should have the numbers from 1002
// to 1 in descending order

for (i=1000;i>=1;i--) {
    nums.push(i);
}

//console.log(nums);


console.log("==================== Question 16 ====================");

// write a function named arrayMerge that takes in an array as an argument
// and returns a string of all the elements combined


function arrayMerge(array) {
    var stringArray = "";
    array.forEach(function(element){
        stringArray += element;
    });

    return stringArray
};


var myArray = [3,65,"hello",2,7,true,23,"yes"];

console.log(arrayMerge(myArray));
// Test your function with `myArray` as the argument



console.log("==================== Question 17 ====================");

// write a function named `arrSum` that takes in an array and returns 
// the sum of all the elements of the array

function arrSum (array) {
    var sumArray = 0;
    array.forEach(function(element){
        sumArray += element;
    });

    return sumArray
}

myArray = [3,65,24,12,7,81,23,39];

// Test your function with `myArray` as the argument
console.log(arrSum(myArray));


console.log("==================== Question 18 ====================");

// make a variable called `tyler` and set it equal to an object with the following data: 
// name is "Tyler"
// waterBottle is true 
// whereLunchToday is "Tyler's house"
var tyler = {
    name:"Tyler",
    watterBottle: true,
    whereLunchToday : "Tyler\'s house"
};
// add a key of "is a bro" to the `tyler` object and set it to true
tyler["is a bro"]=true;

// add a key of "favBand" to the `tyler` object and set it to "Iron Maiden"
tyler.favBand="Iron Maden";

// update the "waterBottle" key in the `tyler` object to be false
tyler.watterBottle=false;

// then after making the `tyler` object, loop over the object and 
// create an alert with the key and the value seperated by a space


for (var property in tyler) {
    alert(property + " " + tyler[property])
  }


console.log("==================== Question 19 ====================");

var a = 5; 
var b = 6;

function returnSum1(a,b){ return a + b; }

var part1 = returnSum1();

// What is the value of `part1`?
//NaN

console.log(part1);

var a = 5; 
var b = 6;

function returnSum2(){ var a = 9; return a + b; }

var part2 = returnSum2();

// What is the value of `part2`?
//15
console.log(part2);


var a = 5; 
var b = 6;

function returnSum3(){ return a + b; var a = 9; }

var part3 = returnSum3();

// What is the value of `part3`?
//NaN

console.log(part3);

var a = 5; 
var b = 6;

function returnSum4(){ var a = "hi"; return a + b; }

var part4 = returnSum4();

// What is the value of `part4`?
//hi6

console.log(part4);

var num = 0; 
for (var i=9; i>=0; i--){ num += i; }

// What is the value of `num`?
//45

console.log(num);