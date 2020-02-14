const request  = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5755648fcc81a1d3697ec0e7196d6a76/' + encodeURIComponent(latitude) +',' + encodeURIComponent(longitude) +'?units=si&lang=pl'

    request({
        url,
        json: true
    }, (error, {body:response}) => {
        if (error){
            callback('Nie moge podlaczyc sie do serwisu pogody!',undefined)
        } else if (response.error){
            callback('Nie moge znalezc lokalizacji!',undefined)
        } else {
            const data = response.currently
            const text = (response.daily.data[0].summary + "\nAktualnie jest "+ data.temperature +" °C. \nIstnieje "+ data.precipProbability + "% szans na deszcz. Odczuwalna temperatura maksymalna wyniesie " +  response.daily.data[0].apparentTemperatureHigh + " °C, minimalna "+ response.daily.data[0].apparentTemperatureLow + " °C")
            callback(undefined,text)
        }
    })
}


module.exports = forecast