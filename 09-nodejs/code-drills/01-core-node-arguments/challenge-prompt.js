


/////////////////////////////5.1///////////////////////////////////////////

// console log "Hello World"

// ---------- code starts here ----------

console.log("Hello world");



// ---------- code ends here ---------- 

/////////////////////////////5.2///////////////////////////////////////////

// next console log the command line arguments when this file is run in node

// ---------- code starts here ---------- 
var arguments= process.argv;

arguments.forEach(function(element) {
    console.log(element);
})





// ---------- code ends here ---------- 

/////////////////////////////5.3///////////////////////////////////////////

// Console log the first and second command line argument that the user gives this file
// if there is no input it should come back undefined

// ---------- code starts here ---------- 
var arg1= process.argv [2];
var arg2= process.argv [3];

console.log(arg1 + " " + arg2);



// ---------- code ends here ---------- 

/////////////////////////////5.4///////////////////////////////////////////

// If the first command line argument given to this file is "minion" and the second argument is "army", console log "I have found Gru"
// If the first command line argument given to this file is "minion" and the second argument is not "army", console log "Still looking for Gru"
// For any other command line arguments, console log "Minion RAGE!"

// ---------- code starts here ---------- 

if ( arg1 === "minion" && arg2 === "army" ) {
    console.log("I have found Gru");
} else if ( arg1 === "minion" && arg2 !== "army" ){
    console.log ("Looking for Gru");
} else {
    console.log ("Minion RAGE!");
}





// ---------- code ends here ---------- 
