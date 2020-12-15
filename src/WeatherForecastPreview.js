import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div class="col">
      <h6>{hours()}</h6>
      <WeatherIcon code={props.data.weather[0].icon} />
      <h4>{Math.round(props.data.main.temp_max)}°</h4>
      <h6>{Math.round(props.data.main.temp_min)}°</h6>
    </div>
  );
}
