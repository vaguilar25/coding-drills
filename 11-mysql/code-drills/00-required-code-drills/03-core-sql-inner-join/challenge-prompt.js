var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",

    // 
    database: "food_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    foodSearch();
});

// INNER JOIN

// HINT - Console.log the err and res to check if the query is working

function foodSearch() {
// =============== Code Starts Here ===============

var query = "SELECT nutrition.id, ingredients.foodname FROM ingredients INNER JOIN nutrition ON nutrition.foodname = ingredients.foodname";
connection.query(query, function (err, res) {
    console.log("err", err)
    console.log("res", res)
});










// =============== Code Ends Here ===============
}