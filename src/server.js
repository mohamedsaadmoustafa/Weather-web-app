const express = require('express');
const request = require('express/lib/request');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

// time now
const time = new Date().toLocaleTimeString();
console.log("\nTime Now:", time);
var ip = require("ip");
console.log ( "ip.address: ", ip.address());

// specifying the path to our public folder having static assets
const publicStaticDirPath = path.join(__dirname, '../assets')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// express app
const app = express();
// port
const port = process.env.PORT || 3000;
// set app configuration
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicStaticDirPath))
hbs.registerPartials(partialsPath)
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.title = 'Weather App'
app.locals.strftime = require('strftime')
app.locals.email = 'mohamedsaadmoustafa+weather@gmail.com'
console.log('App ame:', app.locals.title)
console.log('Email:', app.locals.email)

app.get('/', require('../modules/home.js'))
// route to get the weather data
// localhost:3000/weather?address=Hurghada
app.post('/weather', function(req, res) {
  res.redirect(`/weather?address=${req.body.name}`);
});
app.get('/weather', require('../modules/weather.js'))
app.get('/api', require('../modules/api.js'))
// route if a page does not exist (404)
app.get('*', require('../modules/404.js'))

// running server on port
app.listen(port, () => {
  console.log('Server is up and running on port: ', port)
});

