var inquirer = require('inquirer');
var request = require("request");

var question = {
    type: 'input',
    name: 'city',
    message: 'What city weather would yoy like to see?',

}

var api_key = "9c0ee32f38e44e8ad2ff55ceec5d1b2f";


init(question)
function init( question) {



    inquirer.prompt(question).then(answers => {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + answers.city + ",us&APPID=" + api_key;

        console.log(queryURL);
        request(queryURL, function (error, response, body) {
            var weather = JSON.parse(body);
            console.log(weather.name);
            console.log(weather.main.temp);
            console.log(weather.weather[0].description);
        }

        )

    })


}