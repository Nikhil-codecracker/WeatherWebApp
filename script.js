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
        "lat": 28.7188327,
        "lng": 77.1370002,

    },
    1: {
        "name": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "lat": 19.7515,
        "lng": 75.7139,

    },
    2: {
        "name": "Kolkata",
        "state": "West Bengak",
        "country": "India",
        "lat": 22.5726,
        "lng": 88.3639,

    },
    3: {
        "name": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "lat": 13.0827,
        "lng": 80.2707,

    },
    4: {
        "name": "Banglore",
        "state": "Karnataka",
        "country": "India",
        "lat": 12.9716,
        "lng": 77.5946,

    },
    5: {
        "name": "Paris",
        "state": "ile-de-france",
        "country": "France",
        "lat": 28.7188327,
        "lng": 77.1370002,

    },
    6: {
        "name": "New York City",
        "state": "New York",
        "country": "USA",
        "lat": 40.7128,
        "lng": 74.0060,

    },
    7: {
        "name": "Tokyo",
        "state": "Tokyo",
        "country": "Japan",
        "lat": 35.6762,
        "lng": 139.6503,

    },
    8: {
        "name": "London",
        "state": "England",
        "country": "UK",
        "lat": 51.5074,
        "lng": 0.1278,

    },
    9: {
        "name": "Adelaide",
        "state": "South Australia",
        "country": "Australia",
        "lat": -34.921230,
        "lng": 138.599503,
    },

    10: {
        "name": "Melbourne",
        "state": "Victoria",
        "country": "Australia",
        "lat": -37.840935,
        "lng": 144.946457,
    },

    11: {
        "name": "Cape Town",
        "state": "Western Cape",
        "country": "South Africa",
        "lat": -33.918861,
        "lng": 18.423300,
    },

    12: {
        "name": "Amsterdam",
        "state": "North Holland",
        "country": "Netherlands",
        "lat": 52.370216,
        "lng": 4.895168,
    }
}