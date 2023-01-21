const forecast = require('./forecastdata.js');
const capitalize = require('../utils/capitalize.js');
const Now_weather = require('../utils/now_weather.js');
const Today_weather = require('../utils/today_weather.js');
const Next_weather = require('../utils/next_weather.js');

module.exports = function (req, res) {
  const address = req.query.address

  forecast(address, (error, data) => {
    if(error){ res.redirect('404')}
    else {
      if (data === undefined) {
        res.redirect('404')
      } else{
      now_weather = Now_weather(data[0])
      // today weather
      today_weather = Today_weather(data.slice(1, -32))
      // next 4 days weather
      first_weather = Next_weather(data.slice(-9, -1))
      second_weather = Next_weather(data.slice(-17, -9))
      third_weather = Next_weather(data.slice(-25, -17))
      fourth_weather = Next_weather(data.slice(-33, -25))
      //last_weather = data.slice(-1) // ignore

      render_data = {
        now_weather: now_weather,
        today_weather: today_weather,
        next_weather: [
          first_weather,
          second_weather,
          third_weather,
          fourth_weather
        ],
        place: capitalize(address)
      }

      res.render('weather', render_data);
    }
    }
  })
}

