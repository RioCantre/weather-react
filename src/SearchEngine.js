import React, { useState } from "react";

export default function SearchEngine(props) {
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
          <i className="fas fa-map-pin"></i>
        </button>
      </form>
    </div>
  );
}
