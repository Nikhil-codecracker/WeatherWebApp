var uv = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside"]

var uvScale = ["Extreme","Very High","High","Moderate","Low"];
var visibleIndex = ["Excellent","Very Good","Good","Moderate","Poor"];
var humidityIndex = [" Very Dry","Dry","Moderate","Humid","Very Humid"];
var airQualityIndex = ["Good","Moderate","Unhealthy","Very Unhealthy","Hazardous"];
var dayOfWeek = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
var monthOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


var dict = {
    "New Delhi": {
        "name": "New Delhi",
        "state": "Delhi",
        "country": "India",
    },
    "Mumbai": {
        "name": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
    },
    "Kolkata": {
        "name": "Kolkata",
        "state": "West Bengak",
        "country": "India",
    },
    "Chennai": {
        "name": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
    },
    "Banglore": {
        "name": "Banglore",
        "state": "Karnataka",
        "country": "India",
    },
    "Paris": {
        "name": "Paris",
        "state": "ile-de-france",
        "country": "France",
    },
    "New York City": {
        "name": "New York City",
        "state": "New York",
        "country": "USA",
    },
    "Tokyo": {
        "name": "Tokyo",
        "state": "Tokyo",
        "country": "Japan",
    },
    "London": {
        "name": "London",
        "state": "England",
        "country": "UK",
    },
    "Adelaide": {
        "name": "Adelaide",
        "state": "South Australia",
        "country": "Australia",
    },

    "Melbourne": {
        "name": "Melbourne",
        "state": "Victoria",
        "country": "Australia",
    },

    "Cape Town": {
        "name": "Cape Town",
        "state": "Western Cape",
        "country": "South Africa",
    },

    "Amsterdam": {
        "name": "Amsterdam",
        "state": "North Holland",
        "country": "Netherlands",
    }
}


//Main Call to original Page
function getValues(city="New Delhi"){
    const main = new XMLHttpRequest();
    const urlweather = 'https://api.weatherapi.com/v1/forecast.json?key=b237bbd52a554e65b4b62837202010&q='+ `${city}` +'+&days=5';
    main.open("GET", urlweather);
    main.send();

    main.onload = (e) => {
        var res = JSON.parse(main.responseText);
        var city = res.location.name;
        var country = res.location.country;
        var temp = res.current.temp_c;
        var cond = res.current.condition.text;
        var wind_speed = res.current.wind_kph;
        var wind_dir = res.current.wind_dir;
        var humidity = res.current.humidity;
        var visibility = res.current.vis_km;
        var uv = res.current.uv;
        var lat = res.location.lat;
        var lng = res.location.lon;
        var daydata = res.forecast;
        let daytemp = new Array(5);
        for (var i=0;i<3;i++){
            // console.log(daydata.forecastday[i].day.avgtemp_c)
            daytemp.push(daydata.forecastday[i].day.avgtemp_c)
        }
        var sunrise = daydata.forecastday[0].astro.sunrise;
        var sunset = daydata.forecastday[0].astro.sunset;
        var rain = daydata.forecastday[0].day.daily_will_it_rain;
        var time = new Date();
        var daynum = time.getDay();
        var date = time.getDate();
        var monthnum = time.getMonth();
        var year = time.getFullYear();
        var day =  dayOfWeek[daynum];
        var month = monthOfYear[monthnum];
        var weathercond = daydata.forecastday[0].day.condition.text;

        var todayDate = day + ", " + date + " " + month + " " + year;
        //console.log(todayDate);

        // console.log(sunrise,sunset)
         console.log(city, country, temp, cond, wind_speed, wind_dir, rain, humidity, visibility, uv);
    }

    //AirQuality Index api Call
    const aqi = new XMLHttpRequest();
    const urlaqi = 'http://api.airvisual.com/v2/city?city='+`${city}`+'&state='+`${dict[city].state}`+'&country='+`${dict[city].country}`+'&key=58535385-a3a3-4622-af58-d2c51254a9cb';
    aqi.open("GET", urlaqi);
    aqi.send();

    aqi.onload = (e) => {
        var resaqi = JSON.parse(aqi.responseText);
        var aqi_val = resaqi.data.current.pollution.aqius
        // console.log(resaqi)
        console.log(aqi_val);
    }
}


getValues();

