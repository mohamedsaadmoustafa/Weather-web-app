module.exports = (data) => {
  let today_weather = []
  for (let index in data) {
    today_weather[index] = {
      date: new Date(data[index].dt_txt).getHours(),
      icon: data[index].weather[0].icon,
      temp: Math.floor(data[index].main.temp)
    }
  }
  return today_weather
}