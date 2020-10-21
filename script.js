var uv = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside"]
const Http = new XMLHttpRequest();
const url='https://api.weatherapi.com/v1/current.json?key=b237bbd52a554e65b4b62837202010&q=Delhi';
Http.open("GET", url);
Http.send();

Http.onload = (e) => {
    var res = JSON.parse(Http.responseText);
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
    console.log(city,country,temp,cond,wind_speed,wind_dir,rain,humidity,visibility,uv);
}