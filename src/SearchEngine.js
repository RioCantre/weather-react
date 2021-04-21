import axios from "axios";
import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
    });

  }

  if (weatherData.ready) {
  return (
    <div>
      <h1 id="main-city"> {props.city} </h1>

      <CurrentDate date={weatherData.date} />
     
      <p className="weather-quote" >
        "One should see that all appearance is like mist and fog."
      </p>

      <div id="float-r">
        <h3  className="description text-capitalize"> {weatherData.description} </h3>
          <strong className="today-temp">
          <span className="cel-temp" > {Math.round(weatherData.temperature)} </span>°|
            <span className="fah-temp" > {Math.round(weatherData.temperature * 9 / 5) + 32}</span>°
          </strong> 
          <br />                      
          <div id="other-info">
          Humidity:  <span className="current-humid"> {weatherData.humidity} </span>%
            <br />
            Wind:  <span className="current-wind" > {weatherData.wind} </span> kmph 
          </div>
          <br />               
      </div>          
      <br />
      <div className="float-l">
        <img  className="main-description" src="{weatherData.iconUrl} " alt="{weatherData.description} "/>
      </div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          id="city-input"
          type="text"
          className="form-control"
          placeholder=" Type a city in here... "

        />

        <button className="btn 1" type="submit" id="search-input">
          Search
        </button>
        <button className="btn" type="button" id="current-input">
          <i className="fas fa-map-pin"> </i>
        </button>
      </form>
    </div>
  );

  } else {
    const apiKey = "97ab832bf6f8aa6eae3f8515460ad577";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);


    return "Currently loading..."

  }


}
