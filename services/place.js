const axios = require('axios');

const getPlaceLatLnG = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let location = res.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formated_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlaceLatLnG
}