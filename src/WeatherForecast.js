import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div class="weekly">
        <div class="row">
          <div class="col">
            <h6>Thursday 9.24</h6>
            <WeatherIcon code={forecast.list[0].weather[0].icon} />
            <h4>{Math.round(forecast.list[0].main.temp_max)}°</h4>
            <h6>{Math.round(forecast.list[0].main.temp_min)}°</h6>
          </div>
          <div class="col">
            <h6>Friday 9.25</h6>
            <WeatherIcon code={forecast.list[1].weather[0].icon} />
            <h4>{Math.round(forecast.list[1].main.temp_max)}°</h4>
            <h6>{Math.round(forecast.list[1].main.temp_min)}°</h6>
          </div>
          <div class="col">
            <h6>Saturday 9.26</h6>
            <WeatherIcon code={forecast.list[2].weather[0].icon} />
            <h4>{Math.round(forecast.list[2].main.temp_max)}°</h4>
            <h6>{Math.round(forecast.list[2].main.temp_min)}°</h6>
          </div>
          <div class="col">
            <h6>Sunday 9.27</h6>
            <WeatherIcon code={forecast.list[3].weather[0].icon} />
            <h4>{Math.round(forecast.list[3].main.temp_max)}°</h4>
            <h6>{Math.round(forecast.list[3].main.temp_min)}°</h6>
          </div>
          <div class="col">
            <h6>Monday 9.28</h6>
            <WeatherIcon code={forecast.list[4].weather[0].icon} />
            <h4>{Math.round(forecast.list[4].main.temp_max)}°</h4>
            <h6>{Math.round(forecast.list[4].main.temp_min)}°</h6>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `62195a01c77939981afa2a73aa7e3da1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecastResponse);
  }
}
