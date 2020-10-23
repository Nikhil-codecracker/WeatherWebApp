var uvmap = ["No protection needed. You can safely stay outside", "Protection needed. Seek shade during late morning through mid-afternoon.", "Extra protection needed. Be careful outside, especially during afternoon"];

var visibleIndex = ["Excellent", "Very Good", "Good", "Moderate", "Poor"];
var humidityIndex = [" Very Dry", "Dry", "Moderate", "Humid", "Very Humid"];
var airQualityIndex = ["Good", "Moderate", "Unhealthy", "Very Unhealthy", "Hazardous"];
var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


var long;
var latitude;

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
        document.getElementById("daytwo").innerHTML = dayOfWeek[(daynum + 2)%7];
        document.getElementById("daythree").innerHTML = dayOfWeek[(daynum + 3)%7];

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

}


getValues();

function locationpage2(city){
    const resText = new XMLHttpRequest();
    const urlweather = 'https://api.weatherapi.com/v1/forecast.json?key=b237bbd52a554e65b4b62837202010&q=' + `${city}`;
    resText.open("GET", urlweather);
    resText.send();

    resText.onload = (e) =>{
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

document.getElementById("location").onclick = () =>{
    document.getElementById("innerconsole").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("map").style.display = "none";
    document.getElementById("about-space").style.display = "none";
}

document.getElementById("dashboard").onclick = () =>{
    document.getElementById("innerconsole").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("about-space").style.display = "none";
}

document.getElementById("Map").onclick = () =>{
    document.getElementById("innerconsole").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("about-space").style.display = "none";
}
document.getElementById("about").onclick = () =>{
  document.getElementById("main-container").style.display = "none";
  document.getElementById("about-space").style.display = "block";
}



document.getElementById("loc2").onclick = () =>{
  document.getElementById("main-container").style.display = "block";
  document.getElementById("innerconsole").style.display = "none";
  document.getElementById("search").style.display = "block";
  document.getElementById("map").style.display = "none";
  document.getElementById("about-space").style.display = "none";
}

document.getElementById("dash2").onclick = () =>{
  document.getElementById("main-container").style.display = "block";
  document.getElementById("innerconsole").style.display = "block";
  document.getElementById("search").style.display = "none";
  document.getElementById("map").style.display = "none";
  document.getElementById("about-space").style.display = "none";
}

document.getElementById("map2").onclick = () =>{
  document.getElementById("main-container").style.display = "block";
  document.getElementById("innerconsole").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("map").style.display = "block";
  document.getElementById("about-space").style.display = "none";
}
document.getElementById("about2").onclick = () =>{
document.getElementById("main-container").style.display = "none";
document.getElementById("about-space").style.display = "block";
}

var cards = ["card1","card2","card3","card4","card5","card6"]

cards.forEach(change);

function change(item,index){
    document.getElementById(item).onclick = () => {
        document.getElementById("innerconsole").style.display = "block";
        document.getElementById("search").style.display = "none";

        getValues(arr[index]);
    }
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
  }
]
const users = [
    {
        "id": 0,
        "name": "Kartikeya Agarwal",
        "username": "Kartikeya72001",
        "email": "kartikeya72001@gmail.com",
        "address": {
          "street": "Secotr 13",
          "suite": "A-3/701",
          "city": "New Delhi",
          "zipcode": "110085",
          "geo": {
            "lat": "28.6139",
            "lng": "77.2090"
          }
        },
        "phone": "9718502020",
        "website": "kartikeya72001.github.io",
        "company": {
          "name": " ",
          "catchPhrase": "",
          "bs": "Web Development"
        }
      },
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

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
        // delete dict2.name
        // delete dict2.state
        // delete dict2.country
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
        const title = document.createElement('h5')
        const text = document.createElement('p')
        const web = document.createElement('div')
        web.className = 'web'
        const capitalize = Capitalize(result.name)
        title.innerHTML = capitalize.replace(value, `<b>${value}</b>`)
        text.innerHTML = result.state.toLowerCase().replace(value, `<b>${value}</b>`)
        web.innerHTML = result.country.toLowerCase().replace(value, `<b>${value}</b>`)
        resultElement.appendChild(title)
        resultElement.appendChild(text)
        resultElement.appendChild(web)
        resultElement.classList.add('hidden')
        conResults.appendChild(resultElement)
        setTimeout(() => {
            resultElement.classList.remove('hidden')
        }, 20);
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