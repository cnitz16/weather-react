import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    let suffix = hour >= 12 ? ":00 PM" : ":00 AM";
    let hours = ((hour + 11) % 12) + 1 + suffix;
    return `${hours}`;

    // if (hours > 12) {
    //   hours = hours - 12;
    //   return `${hours}:00 PM`;
    // } else {
    //   return `${hours}:00 AM`;
    // }
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°F`;
  }
  return (
    <div className="col">
      <h6>{hours()}</h6>
      <WeatherIcon code={props.data.weather[0].icon} width={70} height={60} />
      <h4>{temperature()}</h4>
    </div>
  );
}
