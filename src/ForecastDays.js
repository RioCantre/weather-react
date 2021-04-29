import React from "react";
import WeatherIcon from "./WeatherIcon";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function ForecastDays(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        return days[day];
    }
    return (
        <div>
            <div className="forecast-division ">
                <div className="row  ">
                    <div className="col ">
                        <div className="day">
                            <span> {day()} </span>
                            <span className="icon"> <WeatherIcon code={props.data.weather[0].icon} size={29} /> </span>
                        </div>
                        <div className="forecast-temp">
                            <span > {minTemp()}</span> |<span > {maxTemp()}</span>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
            
}