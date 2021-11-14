//////////////////////////////// Global Variables ////////////////////////////
// API Global Variables
const apiKey = "00ef83945ac64f890995ea9f7422b1b0";
const oldSearch = JSON.parse(localStorage.getItem('history') || "[]");

///////////////////////////////// API ////////////////////////////
currentWeather = (cityName) => {
  $('.forecast_background').removeClass('hidden');
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName  + "&appid=" + apiKey + "&units=imperial",
    type: "POST",
    dataType: "json",
    success: function (result, status, xhr) {
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
      $('.current_weather_icon').attr("src", icon);
      $('.description').html(`${description}`);
      $('.today_temp').html(`${temp}&deg;F`);
      $('.humidity').html(`${humidity}%`);
      $('.pressure').html(`${pressure}`);
      $('.wind').html(`${wind}MPH`);

      forecast(latVar, lonVar);
      fiveForecast(cityName)
      savedSearch(cityName);
    },
    error: function (xhr, status, error) {
      alert("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    } 
  })
}


forecast = (latVar, lonVar) => {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + latVar + "&lon=" + lonVar + "&appid=" + apiKey + "&units=imperial",
    type: "GET",
    dataType: "json",
    success: function(result) {
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
    }
  })
}


fiveForecast = (cityName) => {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&units=imperial",
    type: "GET",
    dataType: "json",
    success: function(result) {
      // console.log(result)
      Date.prototype.toShortDate = function () {
        return (this.getMonth() + 1) +
        "/" + this.getDate() +
        "/" + this.getFullYear();
      }

      $('.forecast').html('');
      
      for(let i=0; i<result.list.length; i+=8) {
        const formatDate = (new Date(result.list[i].dt * 1000)).toShortDate();
        const dayIcon = "https://openweathermap.org/img/wn/" + result.list[i].weather[0].icon  + "@2x.png";
        const dayTemp = result.list[i].main.temp;
        const dayWind = result.list[i].wind.speed;
        const dayHumidty = result.list[i].main.humidity; 

        const fml = `        
          <div class="weeks_forecast">
            <div class="day_of_week">${formatDate}</div>
            <img class="day_icon" src="${dayIcon}"></img>
            <div class="day_temp">${dayTemp}</div>
            <div class="day_humidity">${dayWind}</div>
            <div class="day_wind">${dayHumidty}</div>
          </div>`
        
        $('.forecast').append(fml)
      }
    }
  })
}


// /////////////////////////////// Local Storage ///////////////////////////
savedSearch = (cityName) => {
  for (var i = 0; i < oldSearch.length; i++) {
    if (cityName === oldSearch[i]) {
      return;
    }
  }
  oldSearch.push(cityName);
  localStorage.setItem('history', JSON.stringify(oldSearch));
  displaySearchHistory(cityName);
}

// Display search history as buttons from localStorage
displaySearchHistory = () => {
  $('.saved_city').html(oldSearch.map(historyBtn => {
    return `<button><class="saved_city">${historyBtn}</button>`
  })
   .join(""))
}


// /////////////////////////////// Event Listeners ////////////////////////
$('.saved_city').click((event) =>{
  event.preventDefault();
  let cityName = event.target.textContent;
  currentWeather(cityName);
  })


$('.search_input').change((event) => {
  event.preventDefault();
  if (event.keyCode === 13 || $('.search_btn').click())  {
    let cityName = $('.search_input').val();
    currentWeather(cityName);
  }
})


///////////////////////////// Start Function on Load ////////////////////////////
displaySearchHistory();

