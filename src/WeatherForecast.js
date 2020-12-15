import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <div className="col">
          <WeatherForecastPreview data={forecast.list[1]} />
        </div>
        <div className="col">
          <WeatherForecastPreview data={forecast.list[2]} />
        </div>
        <div className="col">
          <WeatherForecastPreview props={forecast.list[3]} />
        </div>
        <div className="col">
          <WeatherForecastPreview props={forecast.list[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = `62195a01c77939981afa2a73aa7e3da1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
