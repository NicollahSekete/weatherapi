const express = require('express');
const hbs = require('express-handlebars');
const path = require('path')
const app = express();
require('dotenv').config();
const getweather = require('./lib/openWeatherMap');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'

}));
app.set('view engine', '.hbs');


app.get('/', async(req, res) => {
    res.render('index')
});

app.post('/', async(req, res)=>{
    let city = req.body.city;
    let data = await getweather(city);
    
    let temp = data.main.temp;
    let description = data.weather[0].description;
    let clouds = data.clouds.all;
    let name = data.name;
    res.render('index',
    {data:
        {temp, description, clouds, name}
    });

});


app.listen(3000, () => {
	console.log('listening on port 3000');
});