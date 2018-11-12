// declare the variable we're storing the confirm dialogue in
var dialogueAnswer;

// create a key press listener
document.onkeyup = function (event) {

  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive
var userKeyPress = event.key;

  // console log the key that the user pressed
console.log("Key press" + userKeyPress);

  // check whether the user pressed the "h" key
if (userKeyPress === "h") {
   // create a confirm dialogue when they do and store the response from that
  // dialogue into the variable we declared outside the event listener
  
    dialogueAnswer = confirm("Confirm");


} 
// check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
if (userKeyPress === "k") {
   if (dialogueAnswer === true) {
     alert("Ok");
   } else {
     alert("No");
   }
  
}

}