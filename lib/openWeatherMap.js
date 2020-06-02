const fetch = require('node-fetch');

const getWeather = async(city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APPID}`;
	let data = await fetch(url);
	let JSObject = await data.json();
	return JSObject;
}


module.exports= getWeather
