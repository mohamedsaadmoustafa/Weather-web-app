const mphtokmh = require('./mphtokmh.js');

module.exports = (data) => {
  // tue 21/1 - icon - low - high - rain - wind

  // today date
  const weekday = ["Sun", "Mon","Tue","Wed", "Thu","Fri","Sat"];
  const d = new Date(data[5].dt*1000);

  return {
    day: weekday[d.getDay()],
    date: d.toString().split(' ').splice(1,3).join(' '),
    temp_min: Math.floor(data[5].main.temp_min),
    temp_max: Math.floor(data[5].main.temp_max),
    icon: data[5].weather[0].icon,
    wind_speed: Math.floor(mphtokmh(data[5].wind.speed)),
    humidity: data[5].main.humidity
  }
}