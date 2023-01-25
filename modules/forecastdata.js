const axios = require('axios');

// access hidden keys in the .env file.
require('dotenv').config()

const API_KEY = process.env.API_KEY;
var BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'

module.exports = (cityName, callback) => {
  var url = BASE_URL+`?q=${cityName}&appid=${API_KEY}&units=metric`

  axios
  .get(url)
  .then(response => {
    console.log("Start getting weather data!");
    data = response.data.list
    callback(undefined, data)
  })
  .catch(error => {
    console.log('Unable to connect to Forecast API', undefined);
  });
}
