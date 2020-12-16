import React from "react";
import "./WeatherForecast.css";
import WeatherImages from "./WeatherImages";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    let suffix = hour >= 12 ? ":00 PM" : ":00 AM";
    let hours = ((hour + 11) % 12) + 1 + suffix;
    return `${hours}`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°F`;
  }
  return (
    <div className="col">
      <h6>{hours()}</h6>
      <WeatherImages code={props.data.weather[0].icon} />
      <h4>{temperature()}</h4>
    </div>
  );
}
