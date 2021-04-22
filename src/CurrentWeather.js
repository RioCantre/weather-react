import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherQuotes from "./WeatherQuote";



export default function CurrentWeather(props) {
    return (
        <div>
            <h1 id="main-city" className=" text-capitalize"> {props.data.city} </h1>
            <CurrentDate date={props.data.date} />
        
            <WeatherQuotes code={props.data.icon} />

            <div id="float-r">
                <h3 className="description text-capitalize"> {props.data.description} </h3>
                <strong className="today-temp">
                    <span className="cel-temp" > {Math.round(props.data.temperature)} </span>°|
                    <span className="fah-temp" > {Math.round(props.data.temperature  * 9 / 5 ) + 32}</span>°
                </strong>
                <br />
                <div id="other-info">
                    Feels like:  <span  > {Math.round(props.data.feels)}</span>°
                    <br />
                    Humidity:  <span className="current-humid"> {props.data.humidity} </span>%
                    <br />
                    Wind:  <span className="current-wind" > {props.data.wind} </span> kmph
                </div>
                <br />
            </div>
            <br />
            <div className="float-l">
                <WeatherIcon code={props.data.icon}  />   
            </div>
        </div>
    );
}