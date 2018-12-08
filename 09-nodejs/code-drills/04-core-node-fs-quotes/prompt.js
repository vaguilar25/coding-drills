var fs = require("fs");

var userInput = process.argv;


var positionSaid = userInput.indexOf("said");
console.log("Said" + positionSaid);

var quote=""; 
for (i=positionSaid+1; i<userInput.length;i++) {
    console.log("User Input Quote: " + userInput[i]);
    quote = quote + " " + userInput [i];
}
console.log("quote:" + quote.trim());

var whoWrote="";
for (i=2; i<positionSaid;i++) {
    whoWrote=whoWrote + " " + userInput[i];
}
console.log("Who wrote: " + whoWrote.trim() );

var fullQuote ='"'+ quote.trim() + '"' + "-" + whoWrote.trim() + ";";

fs.appendFile("quotes.txt", fullQuote, function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    console.log("quotes.txt was updated!");
  
  });