const request = require('request')
const forecast =(latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=71fda936e7c2d4f51a0991ecbebd0e91&query='+latitude+','+longitude+'&units=m'
    request ({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather services')
        }else if (body.error){
            callback("Unable to find location. Try again")
        }else{
            callback(undefined, body.current.weather_descriptions[0]+ ". It is currently " +body.current.temperature + " degress out. "+"Humidity is "+ body.current.humidity+ "%.")
        }

    })//

}

module.exports = forecast