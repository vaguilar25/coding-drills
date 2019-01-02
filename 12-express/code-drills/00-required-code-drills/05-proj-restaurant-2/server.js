// Rate a restaurant server


// Create our server and manage our routes
var express = require("express");
// More easily interact with the body of requests
var bodyParser = require("body-parser")
// Create relative paths to our htmls and public files
var path = require("path")
// Make queries to our mySQL database
var mysql = require("mysql")



// Define the connection parameters to the sql server
// -------------------- Your Code Here --------------------

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "restaurantsDB"
})


// --------------------- End Code Area --------------------



// Connect to the server we just defined
// -------------------- Your Code Here --------------------

connection.connect(function(err) {
  if (err) throw err
})

// --------------------- End Code Area --------------------



// Initialize express and set our port to 3002
var app = express()
var PORT = 8052
// Make our app use bodyparser to access our requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Serve up static assets from public
app.use(express.static(__dirname + "/public"));



//======================== HTML ========================
// Serve up the index.html and add.html pages
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/add.html"))
})
// ===================================================



// ====================== API ==========================
// Provide API routes for our front end webpage to interact with our database

//Get all restaurants
// -------------------- Your Code Here --------------------
app.get ("/api/restaurants", function(req,res) {
  connection.query("select * from restaurants", function(err,data) {
    
    return res.json(data);
    
  });
})



// --------------------- End Code Area --------------------

//Create new restaurant
// -------------------- Your Code Here --------------------

app.post("/api/restaurants/new",function(req,res) {
  var restaurant=req.body
  console.log(restaurant);
  connection.query ("insert into restaurants set ? " , restaurant) 

})
// --------------------- End Code Area --------------------

//Update restaurant rating
// -------------------- Your Code Here --------------------
app.put ("/api/restaurants/:id/rating/:value",function(req,res) {
  connection.query ("Update restaurants set rating = ? where  restaurant_id=?",[req.params.value,req.params.id])
})



// --------------------- End Code Area --------------------

// ===================================================




// Set up a listener on the designated port for our app
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

