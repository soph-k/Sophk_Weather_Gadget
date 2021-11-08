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
const lat =$('.lat')
const lon =$('.lon')



const weeklyDayEl = $('.weeks_forecast');

const searchBtn = $('.search_btn');
const searchbarEl = $('.search_input')
// API Variables
const apiKey = "00ef83945ac64f890995ea9f7422b1b0";
const locationName = searchbarEl.val();


///////////////////////////////// API ////////////////////////////
searchbarEl.change((event) => {
  event.preventDefault();
    if (event.keyCode === 13 || searchBtn.click()) {
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=00ef83945ac64f890995ea9f7422b1b0",
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log(data);
        }
        //   const city = data.name;
        //   const country = data.country;
        //   const description = data.weather[0].description;
        //   const icon = "https://openweathermap.org/img/wn/" + day.weather[0].icon + ".png";
        //   const temp = data.temperature.value;
        //   const tempUnit = data.temperature.unit;
        //   const humidity = data.humidity.value;
        //   const humidityUnit = data.humidity.unit
        //   const pressure = data.pressure.value;
        //   const pressureUnit = data.pressure.unit;
        //   const wind = data.wind.speed.value;
        //   const windUnit = data.wind.speed.unit;
        //   const uv = data.uv.

        //   searchedLocation.html(`${city}, ${country}`);
        //   searchedlat.html(`${lat}`);
        //   searchedlon.html(`${lon}`);
        //   searchedTime.html(`${time}`);
        //   searchedDescription.html(`${description}`);
        //   searchedIcon.html(`${icon}`);
        //   searchedWeather.html(`${temp} ${tempUnit}`);

        //   if (uv < 3) {
        //     uvValueEl.addClass() 
        //   } else if (uv < 6) {
        //     uvValueEl.addClass()  
        //   } else if (uv < 8) {
        //     uvValueEl.addClass()  
        //   } else if (uv < 11) {
        //     uvValueEl.addClass()  
        //   } else {
        //     uvValueEl.addClass()
        //   }
        // }
      })
      .catch((err) => alert('City does not exist'));
    }
})


// $.ajax({
//   url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=00ef83945ac64f890995ea9f7422b1b0",
//   type: "GET",
//   dataType: "json",
//   success: function(data) {
    
  // locationValues(locationName, lat, lon);

// function locationValues(locationName, lat, lon) {
//   $.ajax({
//     url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial",
//     method: 'GET'
//   }).then((response) => response.json()).then(data => {
//     const lat = data.city.coord.lat;
//     const lon = data.city.coord.lon;


    
//     })


    
 

  



// function weeklyWeatherData(data) {
//   weeklyDayEl.each(day => day

//   )
// }
// ///////////////////////////////// Local Storage ////////////////////////////

// function saveHighScore () {
//   const highScore = {
//     hsname: inputInitalEl.val(),
//     hsscore: score
//   }
//   oldScores.push(highScore);
//   oldScores.sort(function (a, b) {
//     return b.hsscore - a.hsscore
//   })
//   oldScores.splice(5);
//   localStorage.setItem("highScoresDB", JSON.stringify(oldScores));
//   highscores();
// }

// // Takes scores from local stoarage and displays it in highscores list
// function highscores() {
//   displayHighScore.html(oldScores
//     .map(highScoreArray => {
//       return `<li>${highScoreArray.hsname}: ${highScoreArray.hsscore}</li>`;     
//     })
//   .join(""))
// }
