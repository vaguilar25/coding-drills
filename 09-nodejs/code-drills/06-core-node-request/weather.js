// require request
var request = require("request");

// grab the user command line input
var zip = process.argv[2];
if (!zip) {
  zip = 94123;
}

// Use your own API key here
var api_key = "9c0ee32f38e44e8ad2ff55ceec5d1b2f";

// define the query URL
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zip+",us&APPID="+api_key;

request(queryURL, function (error, response, body) {

    if (!error && response.statusCode === 200) {

      var forecast = JSON.parse(body).list;
        console.log(forecast);
      for (var i=0; i<forecast.length; i++) {
        console.log(forecast[i].dt_txt, forecast[i].main.temp)
      }

    } else {
      console.log(error)
    }
})