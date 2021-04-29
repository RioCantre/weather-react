import React from "react";

export default function dailyTemp(props) {
     function dailyTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
     }
    return (
        <span className="forecast-temp">
            {dailyTemp()}
        </span>
    );
}