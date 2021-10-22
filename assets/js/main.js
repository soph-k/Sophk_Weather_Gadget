//////////////////////////////// Selectors ////////////////////////////
const timeEl = $('.time');
const ampmEL = $('.am_pm');
const currentDateEl = $('.current_day');
const monthsArray = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// API Variables
const apiKey = "00ef83945ac64f890995ea9f7422b1b0";
const locationName = "";


//////////////////////////////// Function Current Time ////////////////////////////

function currentTimeFunction () {
  setInterval(() => {
    const time = new Date ();
    const month = time.getMonth ();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getDay ();
    const minutes = time.getMinutes();
    const ampmFormat = hour >= 13 ? hour %12: hour;
    const ampm = hour >=12 ? "PM" : "AM";

    timeEl.text(`${ampmfromat}:${minutes}' '${ampmEL}`)
    currentDateEl.text()

  }, 1000);
}



///////////////////////////////// API ////////////////////////////
function geoLocation () {
  navigator.geolocation.getCurrentPosition((geo) => {
    let {lat, lon} = geo.coords;

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minuteley&appid="this.apiKey
    )
    .then((response) => response.json())
  })
}

let currentWeather = {
  'apiKey': "00ef83945ac64f890995ea9f7422b1b0",
  fetchWeather:  function () {
    fetch ("api.openweathermap.org/data/2.5/weather?q=" 
      + locationName 
      + "&appid="
      + this.apiKey
      + "&cnt=7"
      + "&units=imperial"
    )
    .then((response) => response.json())
    };
  displayWeather: function(data) {  
    const cityName = data;
    const icon =
    const descriptio = data.weather
    const speed = data.wind;
  }

};

let sevenDayWeather = {
  'apiKey': "00ef83945ac64f890995ea9f7422b1b0",
  fetchWeather:  function () {
    fetch ("api.openweathermap.org/data/2.5/weather?q=" 
      + locationName 
      + "&appid=" 
      + this.apiKey
      + "&cnt=7"
      + "&units=imperial"
    )
    .then((response) => response.json())
    };
  displayWeather: function(data) {  
    const cityName = data;
    const icon =
    const descriptio = data.weather
    const speed = data.wind;
  }

};


///////////////////////////////// Local Storage ////////////////////////////




