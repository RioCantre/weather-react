import axios from "axios";
import React, { useState } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
          
      
    });

  }
  function search() {
    const apiKey = "97ab832bf6f8aa6eae3f8515460ad577";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    
  }

  if (weatherData.ready) {
  return (
    <div>
      <div className="container">
        <div id="background" >
          <div className="row gx-1">
              <div className="col-8 order-last">
                <CurrentWeather data={weatherData} />
                  
                <form className="input-group" onSubmit={handleSubmit}>
                  <input
                    id="city-input"
                    type="text"
                    className="form-control"
                    placeholder=" Type a city in here... "
                    onChange={handleCityChange}

                  />

                  <button className="btn 1" type="submit" id="search-input">
                        Search
                  </button>
                  <button className="btn" type="button" id="current-input">
                        <i className="fas fa-map-pin"></i>
                    </button>
                </form>
              </div>

              <div className="col-3 order-first">
                    <div id="days">
                      <Forecast coordinates={weatherData.coordinates}/>
                    </div>
              </div>
          </div>
        </div>
      </div>          
    </div>
  );

  } else {
    search();
    return (
      <div className="loader">
        "Currently loading..."
      </div>
    );

  };


}
