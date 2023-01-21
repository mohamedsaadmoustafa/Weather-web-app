const mphtokmh = require('./mphtokmh.js');

module.exports = (weather) => {
  // today date
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date(weather.dt*1000);
  let day = weekday[d.getDay()];
  var today_date = day + ", " + d.toString().split(' ').splice(1,3).join(' ');;

  return{
    today_date: today_date,
    temp: Math.floor(weather.main.temp),
    feels_like: Math.floor(weather.main.feels_like),
    temp_min: Math.floor(weather.main.temp_min),
    temp_max: Math.floor(weather.main.temp_max),
    pressure:  weather.main.pressure,
    icon: weather.weather[0].icon,
    description: weather.weather[0].description,
    humidity: weather.main.humidity,
    clouds:  weather.clouds.all,
    visibility: weather.visibility/1000.0,
    main: weather.weather[0].main,
    wind_speed: Math.floor(mphtokmh(weather.wind.speed)),
  }
}