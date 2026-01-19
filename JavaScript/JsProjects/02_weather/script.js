
document.addEventListener('DOMContentLoaded', () => {
  //1) grab all the input
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "0fa0307dd6819db14ea0f803b4f989cf"; // open weather api key

  // 2).after click button
  getWeatherBtn.addEventListener('click', async ()=>{
    const city = cityInput.value.trim();

    if(!city) return;

    //now we have to do a web request to fetch the data

    // TWO MANTRAS -> (when you pmake web/database request) : 

    // 1). IT MAY THROW SOME ERROR (it is not necessary that you are requestint and server will respond)

    // 2). SERVER/DATABES IS ALWAYS IN ANOTHER CONTINENT (server kahin door ka ho skta hai toh syd ye kuchh time le respond krne me toh isko handle krna hamesha)

    try {
      const weatherData = await  fetchWeatherData(city);
      displayWeatherData(weatherData);
      
    } catch (error) {
      showError();
    }

  });

  async function fetchWeatherData(city) {
    // get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);

    console.log(typeof response);
    
    console.log("RESPONSE", response);

    if(!response.ok){
      throw new Error("City not found!")
    }

    // conveting data into json format
    const data = await response.json();

    return data;

  }

  function displayWeatherData(data) {
    // display the weather data
    console.log(data);

    const {name, main, weather}= data;
    cityNameDisplay.textContent = name;

    // unlock the display 
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');

    temperatureDisplay.textContent = `Temperature ${main.temp}`;
    descriptionDisplay.textContent = `Weather ${weather[0].description}`;

  }
  
  function showError() {
    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');
  }

});