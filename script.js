var uv = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside"]

//Main Call to original Page
const main = new XMLHttpRequest();
const urlweather = 'https://api.weatherapi.com/v1/current.json?key=b237bbd52a554e65b4b62837202010&q=Delhi';
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
const urlaqi = 'http://api.waqi.info/feed/shanghai/?token=demo';
aqi.open("GET", urlaqi);
aqi.send();

aqi.onload = (e) => {
    var resaqi = (aqi.responseText);
    console.log();
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