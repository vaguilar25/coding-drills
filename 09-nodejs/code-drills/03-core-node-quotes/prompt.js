// ======== You are given NOTHING to start with 😱 ========
// fs is a core Node package for reading and writing files
var fs = require("fs");

var userInput = process.argv;
var fullName = "";

//User input search
userInput.forEach(function(element,index) {
    if (index>1) {
        fullName = fullName + " " + element ; 
    }
})

//console.log ("name to search" + fullName);


fs.readFile("quotes.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    }
    // split the array
    var array =  data.split(";");
    var obj={};

    //Now convert into an object with Name = Quote

    array.forEach(function(property,index) {
        // Get the name
        var name= property.split("-");
        obj[name[1]] = name[0];

        //without using object
        if (name[1] === fullName.trim()) {
            console.log("another way:" + name[0] );
        }       
    })

    // search for the key
    var find = false;
    for (var key in obj) {
        if (key === fullName.trim()) {
            console.log (obj[key] + " - " + key);
            find = true;
        } 
     
    }

    if ( !find ) {
        console.log ("That person never said anything");
    }

})