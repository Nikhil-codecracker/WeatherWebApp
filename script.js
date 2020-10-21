var uv = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside"]

//Main Call to original Page
const main = new XMLHttpRequest();
const urlweather = 'https://api.weatherapi.com/v1/current.json?key=b237bbd52a554e65b4b62837202010&q=Paris';
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
    var rain = res.current.precip_mm;
    var humidity = res.current.humidity;
    var visibility = res.current.vis_km;
    var uv = res.current.uv;
    console.log(city, country, temp, cond, wind_speed, wind_dir, rain, humidity, visibility, uv);
}

//AirQuality Index api Call
const aqi = new XMLHttpRequest();
const urlaqi = 'http://api.airvisual.com/v2/city?city=London&state=England&country=UK&key=58535385-a3a3-4622-af58-d2c51254a9cb';
aqi.open("GET", urlaqi);
aqi.send();

aqi.onload = (e) => {
    var resaqi = JSON.parse(aqi.responseText);
    var aqi_val = resaqi.data.current.pollution.aqius
    console.log(resaqi)
    console.log(aqi_val);
}


//Sunset Sunrise Api Call
const sun = new XMLHttpRequest();
const urlsun = 'https://api.sunrise-sunset.org/json?lat=28.7188327&lng=77.1370002&date=today';
sun.open("GET", urlsun);
sun.send();

sun.onload = (e) => {
    var urlsun = JSON.parse(sun.responseText);
    var sunrise = urlsun.results.sunrise;
    var sunset = urlsun.results.sunset;
    console.log(sunrise, sunset);
}

//Location Function
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude);
}
//getLocation();

//Places Dictionary
dict = {
    0: {
        "name": "New Delhi",
        "state": "Delhi",
        "country": "India",
    },
    1: {
        "name": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
    },
    2: {
        "name": "Kolkata",
        "state": "West Bengak",
        "country": "India",
    },
    3: {
        "name": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
    },
    4: {
        "name": "Banglore",
        "state": "Karnataka",
        "country": "India",
    },
    5: {
        "name": "Paris",
        "state": "ile-de-france",
        "country": "France",
    },
    6: {
        "name": "New York City",
        "state": "New York",
        "country": "USA",
    },
    7: {
        "name": "Tokyo",
        "state": "Tokyo",
        "country": "Japan",
    },
    8: {
        "name": "London",
        "state": "England",
        "country": "UK",
    },
    9: {
        "name": "Adelaide",
        "state": "South Australia",
        "country": "Australia",
    },

    10: {
        "name": "Melbourne",
        "state": "Victoria",
        "country": "Australia",
    },

    11: {
        "name": "Cape Town",
        "state": "Western Cape",
        "country": "South Africa",
    },

    12: {
        "name": "Amsterdam",
        "state": "North Holland",
        "country": "Netherlands",
    }
}