import React from "react";
import CurrentDate from "./CurrentDate";



export default function CurrentWeather(props) {
    return (
        <div>
            <h1 id="main-city" className=" text-capitalize"> {props.data.city} </h1>

            <CurrentDate date={props.data.date} />
            
            <p className="weather-quote" >
                "One should see that all appearance is like mist and fog."
            </p>

            <div id="float-r">
                <h3 className="description text-capitalize"> {props.data.description} </h3>
                <strong className="today-temp">
                    <span className="cel-temp" > {Math.round(props.data.temperature)} </span>°|
                    <span className="fah-temp" > {Math.round(props.data.temperature * 9 / 5) + 32}</span>°
                </strong>
                <br />
                <div id="other-info">
                    Humidity:  <span className="current-humid"> {props.data.humidity} </span>%
                    <br />
                    Wind:  <span className="current-wind" > {props.data.wind} </span> kmph
                </div>
                <br />
            </div>
            <br />
            <div className="float-l">
                <img className="main-description" src="{weatherData.iconUrl} " alt="{weatherData.description} " />
            </div>
        </div>
    );
}