import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastPreview(props) {
  return (
    <div className="col">
      <h6>
        {props.date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </h6>
      <WeatherIcon code={props.data.weather[0].icon} width={70} height={60} />
      <h4>{Math.round(props.data.main.temp)}°</h4>
    </div>
  );
}
