const axios = require('axios');

const getWeather = async(lat, ln) => {
    let res = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${ln}&appid=b6907d289e10d714a6e88b30761fae22`)
    return res.data.main.temp;
}

module.exports = {
    getWeather
}