// 1. Configure Server
var express = require("express");

var app = express();
var PORT = 8059;
//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]
getNumVisits(input);
function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var object = {};
  var arrayString = []
  for (var i = 0; i < arr.length; ++i) {
    arrayString.push(arr[i].split(" "));

    // console.log (arrayString);
    // object[arrayString[1]] = arrayString[0];



  }
  console.log(arrayString);
  for (var i = 0; i < arrayString.length; i++) {
    var visits = parseInt(arrayString[i][0]);
    var domain = arrayString[i][1];
    var subDomain = domain.split(".");
    console.log("visits", visits);
    console.log("domain", domain);
    console.log("subdomain", subDomain);

    for (var j = 0; j < subDomain.length; j++) {
      if (!object[subDomain[j]]) {
        object[subDomain[j]] = visits

        //Otherwise, add the number of visits to it
      } else {
        object[subDomain[j]] += visits
      }
    }

  }


  console.log(object);
  return object
  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================

  app.get("/", function(req, res) {
    var subDomains = getNumVisits(input)
    res.json(subDomains)
  })





  // ===================================================


// Listener
// ===========================================================

// 1. Create server

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
