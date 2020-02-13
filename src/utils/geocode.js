const request  = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidmlubmljIiwiYSI6ImNrNW1iZWZ6djAwaXMzZXBkbTdld2R6N24ifQ.yL8i4cSGpU24bhgLg6sD7Q&limit=1&language=pl'
    request({
        url,
        json: true
    }, (error, {body:response}) => {
    
        if (error){
            callback('Nie moge podlaczyc sie do serwisu lokalizacji!',undefined)
        } else if (response.features.length===0){
            callback('Nie moge znalezc lokalizacji!',undefined)
        } else {
            const location = response.features[0].place_name
            const latitude = response.features[0].center[1]
            const longitude = response.features[0].center[0]
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
    
}


module.exports = geocode