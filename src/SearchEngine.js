import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    document.querySelector("#main-city").innerHTML = `${city}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (

    <div>
      <h1 id="main-city"> New York </h1>
      <h2 className="day-name"> Wednesday </h2>
      <h3>
        <span className="current-date"> March 25, 2021 </span>
        &nbsp;&nbsp;&nbsp;
        <span className="current-time" > 11:39 </span>
      </h3>
      <p className="weather-quote" > </p>

      <div id="float-r">
        <h3  className="description"> Clear </h3>
          <strong className="today-temp">
          <span className="cel-temp" > </span>°|
            <span className="fah-temp" > </span>°
          </strong> 
          <br />                      
          <div id="other-info">
            Humidity:  <span className="current-humid"> </span>%
            <br />
            Wind:  <span className="current-wind" >  </span> kmph 
          </div>
          <br />               
      </div>          
      <br />
      <div className="float-l">
        <img  className="main-description" src="/image/09f.png" />
      </div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          id="city-input"
          type="text"
          className="form-control"
          placeholder=" Type a city in here... "
          onChange={updateCity}
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
}
