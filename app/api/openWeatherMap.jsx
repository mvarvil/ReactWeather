var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?&units=imperial&appid=a2d2a2855a612ddff13d1436a109971a';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log("URL", requestUrl);

        return axios.get(requestUrl).then(function (res) {
            // console.log("res.data", res.data);
            // console.log("res.data.cod", res.data.cod);
            // console.log("res.data.message", res.data.message);
            console.log("1", res);
            if(res.data.cod && res.data.message && res.data.list.length>0) {
                var found = res.data.list.filter(function(item) { return item.name === 'main'; });
                console.log('found', found[0]);
                return res.data.list[0].main.temp;
            } else {
                throw new Error("No found city");    
            }
        }, function (res) {
            throw new Error(res.message);
        });
    }
}


