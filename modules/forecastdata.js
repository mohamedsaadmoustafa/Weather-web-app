const request = require('request');
// access hidden keys in the .env file.
const dotenv = require('dotenv');

const result = dotenv.config()
if (result.error) throw result.error;
API_KEY = result.parsed.API_KEY
var BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'

module.exports = (cityName, callback) => {
  var url = BASE_URL+`?q=${cityName}&appid=${API_KEY}&units=metric`
  request({ url: url, json: true }, function (error, response) {
    if (error) {
      console.log('Unable to connect to Forecast API', undefined);
    }
    else {
      console.log("Start getting weather data!");
      data = response.body.list
      callback(undefined, data)
    }
  })
}
