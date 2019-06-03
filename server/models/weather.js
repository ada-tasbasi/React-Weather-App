const request = require("request-promise"),
      API_Key; //Openweather API key

class Weather {
     static retrieveCity(city, callback){
         request({
             uri:`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_Key}&units=metric`,
             json:true
         }).then((res)=>callback(res)).catch((err)=>{console.log(err); callback({error:"Could not reach OpenWeather API."})});
     }
}

module.exports = Weather;
