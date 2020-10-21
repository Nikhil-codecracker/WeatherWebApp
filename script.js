var uvmap = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside, especially during afternoon"];

var visibleIndex = ["Excellent", "Very Good", "Good", "Moderate", "Poor"];
var humidityIndex = [" Very Dry", "Dry", "Moderate", "Humid", "Very Humid"];
var airQualityIndex = ["Good", "Moderate", "Unhealthy", "Very Unhealthy", "Hazardous"];
var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


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
function getValues(city = "New Delhi") {
    const main = new XMLHttpRequest();
    const urlweather = 'https://api.weatherapi.com/v1/forecast.json?key=b237bbd52a554e65b4b62837202010&q=' + `${city}` + '+&days=5';
    main.open("GET", urlweather);
    main.send();

    main.onload = (e) => {
        var res = JSON.parse(main.responseText);
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
        let daytemp = new Array();
        for (var i = 0; i < 3; i++) {
            // console.log(daydata.forecastday[i].day.avgtemp_c)
            daytemp.push(daydata.forecastday[i].day.avgtemp_c)
        }
        console.log(daytemp)
        var sunrise = daydata.forecastday[0].astro.sunrise;
        var sunset = daydata.forecastday[0].astro.sunset;
        var rain = daydata.forecastday[0].day.daily_will_it_rain;
        var time = new Date();
        var daynum = time.getDay();
        var date = time.getDate();
        var monthnum = time.getMonth();
        var year = time.getFullYear();
        var day = dayOfWeek[daynum];
        var month = monthOfYear[monthnum];
        var weathercond = daydata.forecastday[0].day.condition.text;
        var lastDay = Math.round((temp + daytemp[1] + daytemp[2]) / 3);

        var todayDate = day + ", " + date + " " + month + " " + year;
        //console.log(todayDate);

        // console.log(sunrise,sunset)
        //console.log(temp, cond, wind_speed, wind_dir, rain, humidity, visibility, uv);


        document.getElementById("date").innerHTML = todayDate;
        document.getElementById("today").innerHTML = temp;
        document.getElementById("weather").innerHTML = weathercond;
        document.getElementById("windspeedright").innerHTML = wind_speed;
        document.getElementById("humidityright").innerHTML = humidity + "%";
        document.getElementById("precipitation").innerHTML = rain + "%";
        document.getElementById("day").innerHTML = Math.round(temp) + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
        document.getElementById("day1").innerHTML = Math.round(daytemp[1]) + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
        document.getElementById("day2").innerHTML = Math.round(daytemp[2]) + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
        document.getElementById("day3").innerHTML = lastDay + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
        document.getElementById("daytwo").innerHTML = dayOfWeek[daynum + 2];
        document.getElementById("daythree").innerHTML = dayOfWeek[daynum + 3];

        document.getElementById("uv-index").innerHTML = uv;
        var perct = uv * 10;
        //console.log("percentage: "+perct)
        document.getElementById("bar").style.width = perct + "%";
        if (uv <= 3) {
            document.getElementById("uv-desc").innerHTML = uvmap[0]
        }
        else if (uv <= 7) {
            document.getElementById("uv-desc").innerHTML = uvmap[1]
        }
        else {
            document.getElementById("uv-desc").innerHTML = uvmap[2]
        }



        document.getElementById("sunrise").innerHTML = sunrise;
        document.getElementById("sunset").innerHTML = sunset;
        document.getElementById("wind-speed").innerHTML = wind_speed;
        document.getElementById("wind-dir").innerHTML = wind_dir;

        //Visibility
        document.getElementById("vis-val").innerHTML = visibility;
        if (visibility <= 2) {
            document.getElementById("vis-status").innerHTML = "Poor";
        }
        else if (visibility <= 9) {
            document.getElementById("vis-status").innerHTML = "Moderate";
        }
        else if (visibility <= 19) {
            document.getElementById("vis-status").innerHTML = "Good";
        }
        else if (visibility <= 39) {
            document.getElementById("vis-status").innerHTML = "Very Good";
        }
        else {
            document.getElementById("vis-status").innerHTML = "Excellent";
        }

        //Humidity
        console.log(humidity)
        document.getElementById("humidity").innerHTML = humidity;
        if (humidity <= 20) {
            document.getElementById('humidity-status').innerHTML = "Very Dry";
        }

        else if (humidity <= 30) {
            document.getElementById('humidity-status').innerHTML = "Dry";
        }

        else if (humidity <= 45) {
            document.getElementById('humidity-status').innerHTML = "Moderate";
        }

        else if (humidity <= 60) {
            document.getElementById('humidity-status').innerHTML = "Humid";
        }

        else {
            document.getElementById('humidity-status').innerHTML = "Very Humid"
        }

    }

    //AirQuality Index api Call
    const aqi = new XMLHttpRequest();
    const urlaqi = 'http://api.airvisual.com/v2/city?city=' + `${city}` + '&state=' + `${dict[city].state}` + '&country=' + `${dict[city].country}` + '&key=58535385-a3a3-4622-af58-d2c51254a9cb';
    aqi.open("GET", urlaqi);
    aqi.send();

    aqi.onload = (e) => {
        var resaqi = JSON.parse(aqi.responseText);
        var aqi_val = resaqi.data.current.pollution.aqius
        // console.log(resaqi)
        console.log(aqi_val);

        document.getElementById('aqi-val').innerHTML = aqi_val;
        if (aqi_val < 50) {
            document.getElementById('aqi-status').innerHTML = "Good";
        }

        else if (aqi_val < 150) {
            document.getElementById('aqi-status').innerHTML = "Moderate";
        }

        else if (aqi_val < 200) {
            document.getElementById('aqi-status').innerHTML = "Unhealthy";
        }

        else if (aqi_val < 500) {
            document.getElementById('aqi-status').innerHTML = "Very Unhealthy";
        }

        else {
            document.getElementById('aqi-status').innerHTML = "Hazardous";
        }
    }

    document.getElementById("city").innerHTML = city;
    document.getElementById("country").innerHTML = dict[city].country;

}


getValues();

