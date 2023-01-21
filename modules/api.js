const forecast = require('./forecastdata.js');
const capitalize = require('../utils/capitalize.js');

module.exports = function (req, res) {
  const address = req.query.address

  if(!address){
    //res.send({error: "Please enter a valid location to search weather"})
    res.redirect('/api?address=Hurghada')
  }
  forecast(address, (error, data) => {
    if(error){
      res.redirect('404')
      //res.render('index', { weather: null, error: 'Error, please try again' });
      //return res.send({error})
    } else { /////////////////////////////
      data.place = capitalize(address);
      /*
        now_weather // {}
        today_weather // list of {}
        next_weather // list of {}
        place // city name
      */
      res.contentType('application/json');
      res.send(JSON.stringify(data));
    }
  })
}

