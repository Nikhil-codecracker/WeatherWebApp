var uvmap = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside, especially during afternoon"];

var visibleIndex = ["Excellent", "Very Good", "Good", "Moderate", "Poor"];
var humidityIndex = [" Very Dry", "Dry", "Moderate", "Humid", "Very Humid"];
var airQualityIndex = ["Good", "Moderate", "Unhealthy", "Very Unhealthy", "Hazardous"];
var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var thunderstorm = ["Moderate rain", "Moderate or heavy rain shower", "Heavy rain", "Thundery outbreaks possible", "Heavy rain shower", "Torrential rain shower", "Heavy freezing drizzle", "Heavy rain at times", "Moderate or heavy freezing rain", "Moderate or heavy sleet showers", "Moderate or heavy rain with thunder"];
var rainy = ["Patchy freezing drizzle possible", "Freezing drizzle", "Moderate rain at times", "Light freezing rain", "Light sleet showers", "Patchy light rain with thunder"];
var sunny = ["Sunny", "Clear"];
var sunCloud = ["Patchy rain possible", "Light drizzle", "Light rain shower", "Light rain", "Patchy light drizzle", "Patchy light rain"];
var misty = ["Mist", "Overcast", "Fog", "Freezing fog"];
var cloudy = ["Partly cloudy", "Cloudy"];
var snowy = ["Patchy snow possible", "Blowing snow", "Blizzard", "Patchy sleet possible", "Light sleet", "Moderate or heavy sleet", "Patchy light snow", "Light snow", "Patchy moderate snow", "Moderate snow", "Patchy heavy snow", "Heavy snow", "Ice pellets", "Light snow showers","Moderate or heavy snow showers","Light showers of ice pellets","Moderate or heavy showers of ice pellets","Patchy light snow with thunder","Moderate or heavy snow with thunder"];

var long;
var latitude;

var searchdone = false;

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
  },
  "Shanghai":{
    "name": "Shanghai",
    "state": "Eastern China",
    "country": "China"
  },
  "Mexico":{
    "name": "Mexico City",
    "state": "Mexico",
    "country": "Mexico"
  },
  "Bejing":{
    "name": "Bejing",
    "state": "Hebei",
    "country": "China"
  },
  "Moscow":{
    "name": "Moscow",
    "state": "Moscow City",
    "country": "Russia"
  },
  "Seoul":{
    "name": "Seoul",
    "state": "NA",
    "country": "South Korea"
  },
  "Bangkok":{
    "name": "Bangkok",
    "state": "Krung Thep",
    "country": "Thailand"
  },
  "Chicago":{
    "name": "Chicago",
    "state": "Illinois",
    "country": "US"
  },
  "Madrid":{
    "name": "Madrid",
    "state": "Madrid",
    "country": "Spain"
  },
  "Singapore":{
    "name": "Singapore",
    "state": "NA",
    "country": "Singapore"
  },
  "Barcelona":{
    "name": "Barcelona",
    "state": "Catalonia",
    "country": "Spain"
  },
  "Jaipur":{
    "name": "Jaipur",
    "state": "Rajasthan",
    "country": "India"
  },
  "Hyderabad":{
    "name": "Hyderabad",
    "state": "Andhra Pradesh",
    "country": "India"
  },
  "Pune":{
    "name": "Pune",
    "state": "Maharashtra",
    "country": "India"
  },
}
const dict2 = [
  {
    "name": "New Delhi",
    "state": "Delhi",
    "country": "India",
  },
  {
    "name": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
  },
  {
    "name": "Kolkata",
    "state": "West Bengak",
    "country": "India",
  },
  {
    "name": "Chennai",
    "state": "Tamil Nadu",
    "country": "India",
  },
  {
    "name": "Banglore",
    "state": "Karnataka",
    "country": "India",
  },
  {
    "name": "Paris",
    "state": "ile-de-france",
    "country": "France",
  },
  {
    "name": "New York City",
    "state": "New York",
    "country": "USA",
  },
  {
    "name": "Tokyo",
    "state": "Tokyo",
    "country": "Japan",
  },
  {
    "name": "London",
    "state": "England",
    "country": "UK",
  },
  {
    "name": "Adelaide",
    "state": "South Australia",
    "country": "Australia",
  },

  {
    "name": "Melbourne",
    "state": "Victoria",
    "country": "Australia",
  },

  {
    "name": "Cape Town",
    "state": "Western Cape",
    "country": "South Africa",
  },

  {
    "name": "Amsterdam",
    "state": "North Holland",
    "country": "Netherlands",
  },
  {
    "name": "Shanghai",
    "state": "Eastern China",
    "country": "China"
  },
  {
    "name": "Mexico City",
    "state": "Mexico",
    "country": "Mexico"
  },
  {
    "name": "Bejing",
    "state": "Hebei",
    "country": "China"
  },
  {
    "name": "Moscow",
    "state": "Moscow City",
    "country": "Russia"
  },
  {
    "name": "Seoul",
    "state": "NA",
    "country": "South Korea"
  },
  {
    "name": "Bangkok",
    "state": "Krung Thep",
    "country": "Thailand"
  },
  {
    "name": "Chicago",
    "state": "Illinois",
    "country": "US"
  },
  {
    "name": "Madrid",
    "state": "Madrid",
    "country": "Spain"
  },
  {
    "name": "Singapore",
    "state": "NA",
    "country": "Singapore"
  },
  {
    "name": "Barcelona",
    "state": "Catalonia",
    "country": "Spain"
  },
  {
    "name": "Jaipur",
    "state": "Rajasthan",
    "country": "India"
  },
  {
    "name": "Hyderabad",
    "state": "Andhra Pradesh",
    "country": "India"
  },
  {
    "name": "Pune",
    "state": "Maharashtra",
    "country": "India"
  },
  
]

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
    long = lng;
    latitude = lat;
    var daydata = res.forecast;
    let daytemp = new Array();
    for (var i = 0; i < 3; i++) {
      // console.log(daydata.forecastday[i].day.avgtemp_c)
      daytemp.push(daydata.forecastday[i].day.avgtemp_c)
    }
    console.log(daytemp)
    var sunrise = daydata.forecastday[0].astro.sunrise;
    var sunset = daydata.forecastday[0].astro.sunset;
    var rain = daydata.forecastday[0].day.daily_chance_of_rain;
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
    document.getElementById("windspeedright").innerHTML = wind_speed + "km/h";
    document.getElementById("humidityright").innerHTML = humidity + "%";
    document.getElementById("precipitation").innerHTML = rain + "%";
    document.getElementById("day").innerHTML = Math.round(temp) + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
    document.getElementById("day1").innerHTML = Math.round(daytemp[1]) + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
    document.getElementById("day2").innerHTML = Math.round(daytemp[2]) + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
    document.getElementById("day3").innerHTML = lastDay + '<span class="unitx"><span class="cel"><sup>&#8451;</sup></span></span>';
    document.getElementById("daytwo").innerHTML = dayOfWeek[(daynum + 2) % 7];
    document.getElementById("daythree").innerHTML = dayOfWeek[(daynum + 3) % 7];

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

    var weatherCond = weathercond;
    // console.log(cloudy.includes(weatherCond));
    if (thunderstorm.includes(weatherCond)) {
      document.getElementById('thunderstorm-icon').style.display = "block";
      document.getElementById('rainy-icon').style.display = "none";
      document.getElementById('snowy-icon').style.display = "none";
      document.getElementById('sunCloud-icon').style.display = "none";
      document.getElementById('misty-icon').style.display = "none";
      document.getElementById('cloudy-icon').style.display = "none";
      document.getElementById('sunny-icon').style.display = "none";
    }

    else if (rainy.includes(weatherCond)) {
      document.getElementById('thunderstorm-icon').style.display = "none";
      document.getElementById('rainy-icon').style.display = "block";
      document.getElementById('snowy-icon').style.display = "none";
      document.getElementById('sunCloud-icon').style.display = "none";
      document.getElementById('misty-icon').style.display = "none";
      document.getElementById('cloudy-icon').style.display = "none";
      document.getElementById('sunny-icon').style.display = "none";
    }

    else if (snowy.includes(weatherCond)) {
      document.getElementById('thunderstorm-icon').style.display = "none";
      document.getElementById('rainy-icon').style.display = "none";
      document.getElementById('snowy-icon').style.display = "block";
      document.getElementById('sunCloud-icon').style.display = "none";
      document.getElementById('misty-icon').style.display = "none";
      document.getElementById('cloudy-icon').style.display = "none";
      document.getElementById('sunny-icon').style.display = "none";
    }

    else if (sunCloud.includes(weatherCond)) {
      document.getElementById('thunderstorm-icon').style.display = "none";
      document.getElementById('rainy-icon').style.display = "none";
      document.getElementById('snowy-icon').style.display = "none";
      document.getElementById('sunCloud-icon').style.display = "block";
      document.getElementById('misty-icon').style.display = "none";
      document.getElementById('cloudy-icon').style.display = "none";
      document.getElementById('sunny-icon').style.display = "none";
    }

    else if (misty.includes(weatherCond)) {
      document.getElementById('thunderstorm-icon').style.display = "none";
      document.getElementById('rainy-icon').style.display = "none";
      document.getElementById('snowy-icon').style.display = "none";
      document.getElementById('sunCloud-icon').style.display = "none";
      document.getElementById('misty-icon').style.display = "block";
      document.getElementById('cloudy-icon').style.display = "none";
      document.getElementById('sunny-icon').style.display = "none";
    }

    else if (cloudy.includes(weatherCond)) {
      document.getElementById('thunderstorm-icon').style.display = "none";
      document.getElementById('rainy-icon').style.display = "none";
      document.getElementById('snowy-icon').style.display = "none";
      document.getElementById('sunCloud-icon').style.display = "none";
      document.getElementById('misty-icon').style.display = "none";
      document.getElementById('cloudy-icon').style.display = "block";
      document.getElementById('sunny-icon').style.display = "none";
    }

    else {
      document.getElementById('thunderstorm-icon').style.display = "none";
      document.getElementById('rainy-icon').style.display = "none";
      document.getElementById('snowy-icon').style.display = "none";
      document.getElementById('sunCloud-icon').style.display = "none";
      document.getElementById('misty-icon').style.display = "none";
      document.getElementById('cloudy-icon').style.display = "none";
      document.getElementById('sunny-icon').style.display = "block";
    }

  }

  //AirQuality Index api Call
  const aqi = new XMLHttpRequest();
  const urlaqi = "https://api.waqi.info/feed/" + `${city}` + "/?token=46b6b9160865cef800dde9b691d76cf2dea5cd40";
  aqi.open("GET", urlaqi);
  aqi.send();

  aqi.onload = (e) => {
    var resaqi = JSON.parse(aqi.responseText);
    var aqi_val = resaqi.data.aqi;
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
  var url = "images/" + `${dict[city].country.toLowerCase()}` + '.png';
  document.getElementById('country-image').src = url;
}


getValues();

function locationpage2(city) {
  const resText = new XMLHttpRequest();
  const urlweather = 'https://api.weatherapi.com/v1/forecast.json?key=b237bbd52a554e65b4b62837202010&q=' + `${city}`;
  resText.open("GET", urlweather);
  resText.send();

  resText.onload = (e) => {
    var resp = JSON.parse(resText.responseText);
    var temp = resp.current.temp_c;
    var cond = resp.current.condition.text;
    document.getElementById(city).innerHTML = temp;
    document.getElementById(`${city}cond`).innerHTML = cond;
    //console.log(city + cond)
  }
}

var arr = ["Delhi", "London", "Paris", "New York", "Mumbai", "Kolkata"]
arr.forEach(locationpage2);

document.getElementById("location").onclick = () => {
  document.getElementById("innerconsole").style.display = "none";
  document.getElementById("search").style.display = "block";
  document.getElementById("map").style.display = "none";
  document.getElementById("about-space").style.display = "none";
}

document.getElementById("dashboard").onclick = () => {
  document.getElementById("innerconsole").style.display = "block";
  document.getElementById("search").style.display = "none";
  document.getElementById("map").style.display = "none";
  document.getElementById("about-space").style.display = "none";
}

document.getElementById("Map").onclick = () => {
  document.getElementById("innerconsole").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("map").style.display = "block";
  document.getElementById("about-space").style.display = "none";
}
document.getElementById("about").onclick = () => {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("about-space").style.display = "block";
}



document.getElementById("loc2").onclick = () => {
  document.getElementById("main-container").style.display = "block";
  document.getElementById("innerconsole").style.display = "none";
  document.getElementById("search").style.display = "block";
  document.getElementById("map").style.display = "none";
  document.getElementById("about-space").style.display = "none";
}

document.getElementById("dash2").onclick = () => {
  document.getElementById("main-container").style.display = "block";
  document.getElementById("innerconsole").style.display = "block";
  document.getElementById("search").style.display = "none";
  document.getElementById("map").style.display = "none";
  document.getElementById("about-space").style.display = "none";
}

document.getElementById("map2").onclick = () => {
  document.getElementById("main-container").style.display = "block";
  document.getElementById("innerconsole").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("map").style.display = "block";
  document.getElementById("about-space").style.display = "none";
}
document.getElementById("about2").onclick = () => {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("about-space").style.display = "block";
}

var cards = ["card1", "card2", "card3", "card4", "card5", "card6"]

cards.forEach(change);

function change(item, index) {
  document.getElementById(item).onclick = () => {
    document.getElementById("innerconsole").style.display = "block";
    document.getElementById("search").style.display = "none";

    getValues(arr[index]);
  }
}

var dict3;

const conSearch = document.querySelector('.con-search')
function handleRemove() {
  conSearch.querySelector('input').value = ''
  conSearch.classList.add('notValue')
}
function handleFocus(evt) {
  if (evt.target.value) {
    conSearch.classList.add('focus')
  }
}
function handleBlur() {
  conSearch.classList.remove('focus')
}

function handleSearch(evt) {
  const value = evt.target.value
  const newUsers = dict2.filter((dict2) => {
    const string = JSON.stringify(dict2).toLowerCase()
    if (string.indexOf(value.toLowerCase()) !== -1) {
      return dict2
    }
  })
  renderResults(newUsers, value)
}
function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderResults(results, value) {
  const conResults = document.querySelector('.con-results')
  conResults.innerHTML = ''

  if (!value) {
    conSearch.classList.remove('focus')
    conSearch.classList.add('notValue')
    return
  }
  conSearch.classList.remove('notValue')
  conSearch.classList.add('focus')
  results.forEach((result) => {
    const resultElement = document.createElement('div')
    resultElement.className = 'result'
    resultElement.id = result.name + result.country
    const title = document.createElement('h5')
    const text = document.createElement('p')
    const web = document.createElement('div')
    web.className = 'web'
    const capitalize = Capitalize(result.name)
    title.innerHTML = capitalize.replace(value, `<b>${value}</b>`)
    text.innerHTML = Capitalize(result.state).replace(value, `<b>${value}</b>`)
    web.innerHTML = Capitalize(result.country).replace(value, `<b>${value}</b>`)
    resultElement.appendChild(title)
    resultElement.appendChild(text)
    resultElement.appendChild(web)
    resultElement.classList.add('hidden')
    conResults.appendChild(resultElement)
    setTimeout(() => {
      resultElement.classList.remove('hidden')
    }, 20);

    searchdone = true
    dict3 = results;
  })
}
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: latitude, lng: long };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

setInterval(()=>{
  if(searchdone){
    dict3.forEach(searchcity);
  }
})

function searchcity(city,index){
  id = city.name+city.country
  document.getElementById(id).onclick = function(){
    document.getElementById("innerconsole").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("inp").value = '';

    getValues(city.name);
  }
}
initMap();