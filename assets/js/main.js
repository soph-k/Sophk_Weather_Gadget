//////////////////////////////// Global Variables ////////////////////////////
// API Global Variables
const apiKey = "00ef83945ac64f890995ea9f7422b1b0";
const oldSearch = JSON.parse(localStorage.getItem('history') || "[]");
const cityName = $('.search_input');

///////////////////////////////// API ////////////////////////////
currentWeather = () => {
  $('.forecast_background').removeClass('hidden');
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName.val() + "&appid=" + apiKey + "&units=imperial",
    type: "POST",
    dataType: "json",
    success: function (result, status, xhr) {
      
      console.log(result);
      const cityName = result.name;
      const country = result.sys.country;
      const timeZone = (new Date(result.dt * 1000)).toLocaleTimeString();
      let latVar = result.coord.lat;
      let lonVar = result.coord.lon;
      const icon = "https://openweathermap.org/img/wn/" + result.weather[0].icon + ".png";
      const description = result.weather[0].description;
      const temp = result.main.temp;
      const humidity = result.main.humidity;
      const pressure = result.main.pressure;
      const wind = result.wind.speed;
      

      $('.city_country').html(`${cityName}, ${country}`);
      $('.timezone').html(`${timeZone}`)
      $('.lat_lon_values').html(`${latVar}, ${lonVar}`);
      $('.current_weather_icon').attr(`${icon}`);
      $('.description').html(`${description}`);
      $('.today_temp').html(`${temp}&deg;F`);
      $('.humidity').html(`${humidity}%`);
      $('.pressure').html(`${pressure}`);
      $('.wind').html(`${wind}MPH`);

      forecast(result, latVar, lonVar);
      savedSearch(cityName);
    },
    error: function (xhr, status, error) {
      alert("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    } 
  })
}


forecast = (result, latVar, lonVar) => {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + latVar + "&lon=" + lonVar + "&appid=" + apiKey + "&units=imperial",
    type: "GET",
    dataType: "json",
    success: function(result) {
      console.log(result)

      const uv = result.current.uvi
      $('.uv').html(`${uv}`);

      $('.uv').html(`${uv}`);
      if (uv < 4) {
        $('.uv').addClass('favorable') 
      } else if (uv < 8) {
        $('.uv').addClass('moderate')  
      } else if (uv < 12) {
        $('.uv').addClass('severe')  
      } else {
        $('.uv').addClass('transparent')  
      } 
     
      Date.prototype.toShortDate = function () {
        return (this.getMonth() + 1) +
        "/" + this.getDate() +
        "/" + this.getFullYear();
      }

      $('.weeks_forecast').each((index) => {
        const formatDate = (new Date(result.daily[index].dt).toShortDate());
        const dayIcon = "https://openweathermap.org/img/wn/" + result.daily[index].weather[0].icon  + "@2x.png";
        const dayTemp = result.daily[index].temp.day;
        const dayWind = result.daily[index].wind_speed;
        const dayHumidty = result.daily[index].humidity; 
      

        $('.day_of_week').html(`${formatDate}`);
        $('.day_icon').attr("src", `${dayIcon}`)
        $('.day_temp').html(`src, ${dayTemp}`);
        $('.day_humidity').html(`${dayWind}`);
        $('.day_wind').html(`${dayHumidty}`);
      })
    }
  })
}


// /////////////////////////////// Local Storage ///////////////////////////
savedSearch = (cityName) => {
  oldSearch.push(cityName);
  localStorage.setItem('history', JSON.stringify(oldSearch));
  displaySearchHistory();
}

// Display search history as buttons from localStorage
displaySearchHistory = () => {
  $('.saved_city').html(oldSearch.map(historyBtn => {
    return `<button><li class="saved_city">${historyBtn.cityName}</li></button>`
  })
   .join(""))
}


// /////////////////////////////// Event Listeners ////////////////////////
$('.saved_city').click((event) =>{
  event.preventDefault();
  currentWeather();
})


$('.search_input').change((event) => {
  event.preventDefault();
  if (event.keyCode === 13 || $('.search_btn').click())  {
    currentWeather();
  }
})


// /////////////////////////// Start Function on Load ////////////////////////////
displaySearchHistory();

