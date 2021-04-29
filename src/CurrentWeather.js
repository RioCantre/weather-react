import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";



export default function CurrentWeather(props) {
    return (
        <div>
            <div className="recent-city-division">

                <h2 className="text-capitalize">
                    {props.data.city}
                </h2>
                
                <CurrentDate date={props.data.date} />
                    
                    <div className="row mt-5">
                        <div className="col">
                            <h3 > 
                                It's {props.data.description} today!
                            </h3>
                            <div className="temperature">
                                <span className="cel-temp"> {Math.round(props.data.temperature)} °</span>|
                                <span className="fah-temp"> {Math.round(props.data.temperature * 9 / 5 ) + 32}°</span>
                            </div>
                            <div className="feels-like">
                                Feels like: <span> {Math.round(props.data.feels)}</span>°
                            </div>
                            <div className="humidity">
                                Himidity: <span className="current-humid"> {props.data.humidity} </span>%
                            </div>
                            <div className="wind-speed">
                                Wind: <span className="current-wind"> {props.data.wind} </span> kmph
                            </div>
                        </div>
                        <div className="col">
                            <div class="weather-icon">
                                <WeatherIcon code={props.data.icon} size={100} />
                            </div>
                            <div className="sun-rise">
                                Sun rise : &nbsp;&nbsp;&nbsp;5:30 am
                            </div>
                            <div className="sun-set">
                                Sun set : &nbsp;&nbsp;&nbsp;6:30 pm
                            </div>
                            <div className="hourly">
                                9:00 :  clear &nbsp; 9° 
                            </div>
                            <div className="hourly">
                                9:00 :  clear &nbsp; 9° 
                            </div>
                            <div className="hourly">
                                9:00 :  clear &nbsp; 9° 
                            </div>
                            <div className="hourly">
                                9:00 :  clear &nbsp; 9° 
                            </div>
                            <div className="hourly">
                                9:00 :  clear &nbsp; 9° 
                            </div>
                            <div className="hourly">
                                9:00 :  clear &nbsp; 9° 
                            </div>
                          
                        </div>
                    </div>
                 
            </div>
        </div>
    );
}