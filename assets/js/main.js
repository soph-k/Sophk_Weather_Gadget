//////////////////////////////// Global Variables ////////////////////////////
// Current Time Variables
const searchedLocation = $('.locationt_time');
const searchedlat = $('.lat');
const searchedlon = $('.lon')
const searchedTime = $('.time');
const searchedDescription = $('.description')
const searchedIcon = $('.current_weather_data')
const searchedWeather = $('.today_temp')




const humidityEl = $('.humidity');
const humidityValueEl = $('.humidity_value');
const pressureEl = $('.pressure');
const pressureValueEl = $('.pressure_value');
const windEl = $('.wind');
const windValueEl = $('.wind_value');
const uvEl = $('.uv');
const uvValueEl = $('.uv_value');

const weeklyDayEl = $('.weeks_forecast');

const searchBtn = $('.search_btn');
const searchbarEl = $('.search_bar')
// API Variables
const apiKey = "00ef83945ac64f890995ea9f7422b1b0";
const locationName = searchbarEl.val();



///////////////////////////////// API ////////////////////////////
function weatherData () {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&units=imperial&appid=${apiKey}`,
    method: 'GET'
  }).then((response) => response.json()).then(response2 => {
    console.log(response2)
//within this promise because of response2 what we are going to do is listen for any event on related to the search bar 
// determine what type of event was fired using if/else statements
// call weatherdata function to display weather data
    searchbarEl.change(function(event) {
    event.preventDefault();
      if (event.keyCode === 13) {
        currentWeatherData(response2);
      }
      else {
      searchBtn.click(currentWeatherData(response2));
    }
  })
  
  // .catch((err) => alert('City does not exist'));
  })
}

function currentWeatherData(data) {
  const city = data.city.name;
  const country = data.city.country;
  const lat = data.city.coord.lat;
  const lon = data.city.coord.lon;
  const time = data.timezone;
  const description = data.city.weather[0].description;
  const icon = data.weather[0].icon;
  const temp = data.temperature.value;
  const tempUnit = data.temperature.unit;
  const humidity = data.humidity.value;
  const humidityUnit = data.humidity.unit
  const pressure = data.pressure.value;
  const pressureUnit = data.pressure.unit;
  const wind = data.wind.speed.value;
  const windUnit = data.wind.speed.unit;
  const uv = data.uv

// https://openweathermap.org/current

  searchedLocation.text(`${city}, ${country}`);
  searchedlat.text(`${lat}`);
  searchedlon.text(`${lon}`);
  searchedTime.text(`${time}`);
  searchedDescription.text(`${description}`);
  searchedIcon.text(`${icon}`);
  searchedWeather.text(`${temp} ${tempUnit}`);

  uvColor(data);

  
}

function uvColor(data) {
  if (uv < 3) {
    uvValueEl.addClass() 
  } else if (uv < 6) {
    uvValueEl.addClass()  
  } else if (uv < 8) {
    uvValueEl.addClass()  
  } else if (uv < 11) {
    uvValueEl.addClass()  
  } else {
    uvValueEl.addClass()
  }
}

function weeklyWeatherData(data) {
  weeklyDayEl.each(day => day

  )
}
///////////////////////////////// Local Storage ////////////////////////////




///////////////////////////////// Event Listeners ////////////////////////////
searchBtn.click(function(event){
  if(searchbarEl.val() !== "") {
    weatherData();
  }
})


// searchbarEl.keyup(function(event) {
//   if (event.keyCode === 13) {
//   weatherData();
//    event.preventDefault();
//    searchBtn.click(weatherData);
//   } 
// })


