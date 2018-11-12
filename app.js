const place = require('./services/place');
const weather = require('./services/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await place.getPlaceLatLnG(direccion);
        let weather = await weather.getWeather(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${weather}`;
    } catch (error) {
        return `No se pudo determinar el tiempo en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e));